import SwiftUI
import WebKit

struct SiteContainerView: View {
    var body: some View {
        Group {
            if let indexURL = SiteLoader.localIndexURL() {
                SiteWebView(indexURL: indexURL)
            } else {
                ContentUnavailableView(
                    "Site Bundle Missing",
                    systemImage: "globe.americas",
                    description: Text("Add the `Resources/Site` folder to the macOS target so the local website can load.")
                )
                .padding(32)
            }
        }
        .background(Color.black)
    }
}

struct SiteWebView: NSViewRepresentable {
    let indexURL: URL

    func makeNSView(context: Context) -> WKWebView {
        let configuration = WKWebViewConfiguration()
        configuration.mediaTypesRequiringUserActionForPlayback = []

        let webView = WKWebView(frame: .zero, configuration: configuration)
        webView.setValue(false, forKey: "drawsBackground")

        let parentDirectory = indexURL.deletingLastPathComponent()
        webView.loadFileURL(indexURL, allowingReadAccessTo: parentDirectory)
        return webView
    }

    func updateNSView(_ webView: WKWebView, context: Context) {
    }
}
