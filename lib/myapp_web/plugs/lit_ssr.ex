defmodule MyappWeb.Plugs.LitSSR do
  @moduledoc """
  Post-processes HTML responses through `Myapp.LitSSR` so that Lit / Web Awesome
  custom elements are emitted with declarative shadow DOM (server-side rendered).

  This runs as a `register_before_send/2` callback, so it transforms the final
  response body of both controller-rendered pages and LiveView's initial
  ("dead") render. Subsequent LiveView diffs over the socket are not wrapped —
  components added after mount render on the client as usual.

  On any SSR error the original HTML is sent unchanged.
  """
  import Plug.Conn
  require Logger

  def init(opts), do: opts

  def call(conn, _opts) do
    register_before_send(conn, &render_body/1)
  end

  defp render_body(conn) do
    if html_response?(conn) do
      html = IO.iodata_to_binary(conn.resp_body)

      case Myapp.LitSSR.render(html) do
        {:ok, rendered} ->
          conn
          |> put_resp_header("content-length", Integer.to_string(byte_size(rendered)))
          |> Map.put(:resp_body, rendered)

        {:error, reason} ->
          Logger.error("[LitSSR] render failed, sending original HTML: #{inspect(reason)}")
          conn
      end
    else
      conn
    end
  end

  defp html_response?(conn) do
    conn.status in 200..299 and
      conn
      |> get_resp_header("content-type")
      |> Enum.any?(&String.contains?(&1, "text/html"))
  end
end
