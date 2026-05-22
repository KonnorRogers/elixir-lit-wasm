// If you want to use Phoenix channels, run `mix help phx.gen.channel`
// to get started and then uncomment the line below.
// import "./user_socket.js"

// You can include dependencies in two ways.
//
// The simplest option is to put them in assets/vendor and
// import them using relative paths:
//
//     import "../vendor/some-package.js"
//
// Alternatively, you can `npm install some-package --prefix assets` and import
// them using a path starting with the package name:
//
//     import "some-package"
//
// If you have dependencies that try to import CSS, esbuild will generate a separate `app.css` file.
// To load it, simply add a second `<link>` to your `root.html.heex` file.

// Include phoenix_html to handle method=PUT/DELETE in forms and buttons.
import "@lit-labs/ssr-client/lit-element-hydrate-support.js"

import "@awesome.me/webawesome-pro/dist/components/animated-image/animated-image.js"
import "@awesome.me/webawesome-pro/dist/components/animation/animation.js"
import "@awesome.me/webawesome-pro/dist/components/avatar/avatar.js"
import "@awesome.me/webawesome-pro/dist/components/badge/badge.js"
import "@awesome.me/webawesome-pro/dist/components/bar-chart/bar-chart.js"
import "@awesome.me/webawesome-pro/dist/components/breadcrumb-item/breadcrumb-item.js"
import "@awesome.me/webawesome-pro/dist/components/breadcrumb/breadcrumb.js"
import "@awesome.me/webawesome-pro/dist/components/bubble-chart/bubble-chart.js"
import "@awesome.me/webawesome-pro/dist/components/button-group/button-group.js"
import "@awesome.me/webawesome-pro/dist/components/button/button.js"
import "@awesome.me/webawesome-pro/dist/components/callout/callout.js"
import "@awesome.me/webawesome-pro/dist/components/card/card.js"
import "@awesome.me/webawesome-pro/dist/components/carousel-item/carousel-item.js"
import "@awesome.me/webawesome-pro/dist/components/carousel/carousel.js"
import "@awesome.me/webawesome-pro/dist/components/chart/chart.js"
import "@awesome.me/webawesome-pro/dist/components/checkbox/checkbox.js"
import "@awesome.me/webawesome-pro/dist/components/color-picker/color-picker.js"
import "@awesome.me/webawesome-pro/dist/components/combobox/combobox.js"
import "@awesome.me/webawesome-pro/dist/components/comparison/comparison.js"
import "@awesome.me/webawesome-pro/dist/components/copy-button/copy-button.js"
import "@awesome.me/webawesome-pro/dist/components/details/details.js"
import "@awesome.me/webawesome-pro/dist/components/dialog/dialog.js"
import "@awesome.me/webawesome-pro/dist/components/divider/divider.js"
import "@awesome.me/webawesome-pro/dist/components/doughnut-chart/doughnut-chart.js"
import "@awesome.me/webawesome-pro/dist/components/drawer/drawer.js"
import "@awesome.me/webawesome-pro/dist/components/dropdown-item/dropdown-item.js"
import "@awesome.me/webawesome-pro/dist/components/dropdown/dropdown.js"
import "@awesome.me/webawesome-pro/dist/components/file-input/file-input.js"
import "@awesome.me/webawesome-pro/dist/components/format-bytes/format-bytes.js"
import "@awesome.me/webawesome-pro/dist/components/format-date/format-date.js"
import "@awesome.me/webawesome-pro/dist/components/format-number/format-number.js"
import "@awesome.me/webawesome-pro/dist/components/icon/icon.js"
import "@awesome.me/webawesome-pro/dist/components/include/include.js"
import "@awesome.me/webawesome-pro/dist/components/input/input.js"
import "@awesome.me/webawesome-pro/dist/components/intersection-observer/intersection-observer.js"
import "@awesome.me/webawesome-pro/dist/components/line-chart/line-chart.js"
import "@awesome.me/webawesome-pro/dist/components/markdown/markdown.js"
import "@awesome.me/webawesome-pro/dist/components/mutation-observer/mutation-observer.js"
import "@awesome.me/webawesome-pro/dist/components/number-input/number-input.js"
import "@awesome.me/webawesome-pro/dist/components/option/option.js"
import "@awesome.me/webawesome-pro/dist/components/page/page.js"
import "@awesome.me/webawesome-pro/dist/components/pie-chart/pie-chart.js"
import "@awesome.me/webawesome-pro/dist/components/polar-area-chart/polar-area-chart.js"
import "@awesome.me/webawesome-pro/dist/components/popover/popover.js"
import "@awesome.me/webawesome-pro/dist/components/popup/popup.js"
import "@awesome.me/webawesome-pro/dist/components/progress-bar/progress-bar.js"
import "@awesome.me/webawesome-pro/dist/components/progress-ring/progress-ring.js"
import "@awesome.me/webawesome-pro/dist/components/qr-code/qr-code.js"
import "@awesome.me/webawesome-pro/dist/components/radar-chart/radar-chart.js"
import "@awesome.me/webawesome-pro/dist/components/radio-group/radio-group.js"
import "@awesome.me/webawesome-pro/dist/components/radio/radio.js"
import "@awesome.me/webawesome-pro/dist/components/rating/rating.js"
import "@awesome.me/webawesome-pro/dist/components/relative-time/relative-time.js"
import "@awesome.me/webawesome-pro/dist/components/resize-observer/resize-observer.js"
import "@awesome.me/webawesome-pro/dist/components/scatter-chart/scatter-chart.js"
import "@awesome.me/webawesome-pro/dist/components/scroller/scroller.js"
import "@awesome.me/webawesome-pro/dist/components/select/select.js"
import "@awesome.me/webawesome-pro/dist/components/skeleton/skeleton.js"
import "@awesome.me/webawesome-pro/dist/components/slider/slider.js"
import "@awesome.me/webawesome-pro/dist/components/sparkline/sparkline.js"
import "@awesome.me/webawesome-pro/dist/components/spinner/spinner.js"
import "@awesome.me/webawesome-pro/dist/components/split-panel/split-panel.js"
import "@awesome.me/webawesome-pro/dist/components/switch/switch.js"
import "@awesome.me/webawesome-pro/dist/components/tab-group/tab-group.js"
import "@awesome.me/webawesome-pro/dist/components/tab-panel/tab-panel.js"
import "@awesome.me/webawesome-pro/dist/components/tab/tab.js"
import "@awesome.me/webawesome-pro/dist/components/tag/tag.js"
import "@awesome.me/webawesome-pro/dist/components/textarea/textarea.js"
import "@awesome.me/webawesome-pro/dist/components/toast-item/toast-item.js"
import "@awesome.me/webawesome-pro/dist/components/toast/toast.js"
import "@awesome.me/webawesome-pro/dist/components/tooltip/tooltip.js"
import "@awesome.me/webawesome-pro/dist/components/tree-item/tree-item.js"
import "@awesome.me/webawesome-pro/dist/components/tree/tree.js"
import "@awesome.me/webawesome-pro/dist/components/video-playlist/video-playlist.js"
import "@awesome.me/webawesome-pro/dist/components/video/video.js"
import "@awesome.me/webawesome-pro/dist/components/zoomable-frame/zoomable-frame.js"

import "@awesome.me/webawesome-pro"

import "phoenix_html"
// Establish Phoenix Socket and LiveView configuration.
import {Socket} from "phoenix"
import {LiveSocket} from "phoenix_live_view"
import {hooks as colocatedHooks} from "phoenix-colocated/myapp"
import topbar from "../vendor/topbar"

const csrfToken = document.querySelector("meta[name='csrf-token']").getAttribute("content")
const liveSocket = new LiveSocket("/live", Socket, {
  longPollFallbackMs: 2500,
  params: {_csrf_token: csrfToken},
  hooks: {...colocatedHooks},
})

// Show progress bar on live navigation and form submits
topbar.config({barColors: {0: "#29d"}, shadowColor: "rgba(0, 0, 0, .3)"})
window.addEventListener("phx:page-loading-start", _info => topbar.show(300))
window.addEventListener("phx:page-loading-stop", _info => topbar.hide())

// connect if there are any LiveViews on the page
liveSocket.connect()

// expose liveSocket on window for web console debug logs and latency simulation:
// >> liveSocket.enableDebug()
// >> liveSocket.enableLatencySim(1000)  // enabled for duration of browser session
// >> liveSocket.disableLatencySim()
window.liveSocket = liveSocket

// The lines below enable quality of life phoenix_live_reload
// development features:
//
//     1. stream server logs to the browser console
//     2. click on elements to jump to their definitions in your code editor
//
if (process.env.NODE_ENV === "development") {
  window.addEventListener("phx:live_reload:attached", ({detail: reloader}) => {
    // Enable server log streaming to client.
    // Disable with reloader.disableServerLogs()
    reloader.enableServerLogs()

    // Open configured PLUG_EDITOR at file:line of the clicked element's HEEx component
    //
    //   * click with "c" key pressed to open at caller location
    //   * click with "d" key pressed to open at function component definition location
    let keyDown
    window.addEventListener("keydown", e => keyDown = e.key)
    window.addEventListener("keyup", e => keyDown = null)
    window.addEventListener("click", e => {
      if(keyDown === "c"){
        e.preventDefault()
        e.stopImmediatePropagation()
        reloader.openEditorAtCaller(e.target)
      } else if(keyDown === "d"){
        e.preventDefault()
        e.stopImmediatePropagation()
        reloader.openEditorAtDef(e.target)
      }
    }, true)

    window.liveReloader = reloader
  })
}

