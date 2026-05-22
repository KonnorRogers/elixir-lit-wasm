defmodule Myapp.LitSSR do
  @moduledoc """
  Owns the Extism wasm plugin that server-renders Lit / Web Awesome custom
  elements into declarative shadow DOM.

  The plugin (built from `../../../lit-wasm-plugin`) exports a `render` function
  that takes a JSON string `{"content": "<html>"}` and returns the rendered HTML.

  Calls are serialized through this GenServer because a single Extism plugin
  instance is not safe to invoke concurrently. That makes SSR a throughput
  bottleneck under load — see the moduledoc note about pooling if that matters.
  """
  use GenServer
  require Logger

  # SSR of a full page through a ~40MB wasm module can take a moment.
  @call_timeout 30_000

  def start_link(opts) do
    GenServer.start_link(__MODULE__, opts, name: __MODULE__)
  end

  @doc """
  Renders an HTML string through the wasm plugin.

  Returns `{:ok, rendered_html}` or `{:error, reason}`. Never raises — callers
  can safely fall back to the original HTML on error.
  """
  @spec render(binary()) :: {:ok, binary()} | {:error, term()}
  def render(html) when is_binary(html) do
    GenServer.call(__MODULE__, {:render, html}, @call_timeout)
  catch
    :exit, reason -> {:error, {:exit, reason}}
  end

  @impl true
  def init(_opts) do
    path = Application.fetch_env!(:myapp, :lit_ssr)[:wasm_path]

    # `true` enables WASI, which js-pdk-built plugins require.
    case Extism.Plugin.new(%{wasm: [%{path: path}]}, true) do
      {:ok, plugin} ->
        Logger.info("[LitSSR] loaded wasm plugin from #{path}")
        {:ok, %{plugin: plugin}}

      {:error, reason} ->
        # Don't take the whole app down if the plugin is missing — run
        # degraded and let responses pass through un-rendered.
        Logger.error("[LitSSR] failed to load wasm plugin from #{path}: #{inspect(reason)}")
        {:ok, %{plugin: nil}}
    end
  end

  @impl true
  def handle_call({:render, _html}, _from, %{plugin: nil} = state) do
    {:reply, {:error, :plugin_unavailable}, state}
  end

  def handle_call({:render, html}, _from, %{plugin: plugin} = state) do
    input = Jason.encode!(%{content: html})
    {:reply, Extism.Plugin.call(plugin, "render", input), state}
  end
end
