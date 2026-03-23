import SwiftUI
import WebKit

struct SiteContainerView: View {
    var body: some View {
        Group {
            if let indexURL = SiteLoader.localIndexURL() {
                SiteWebView(indexURL: indexURL)
                    .ignoresSafeArea(.container, edges: .bottom)
            } else {
                ContentUnavailableView(
                    "Site Bundle Missing",
                    systemImage: "globe.americas",
                    description: Text("Add the `Resources/Site` folder to the iOS target so the local website can load.")
                )
                .padding()
            }
        }
        .background(Color.black)
    }
}

struct SiteWebView: UIViewRepresentable {
    let indexURL: URL

    func makeUIView(context: Context) -> WKWebView {
        let configuration = WKWebViewConfiguration()
        configuration.allowsInlineMediaPlayback = true
        configuration.mediaTypesRequiringUserActionForPlayback = []

        let webView = WKWebView(frame: .zero, configuration: configuration)
        webView.isOpaque = false
        webView.backgroundColor = .black
        webView.scrollView.contentInsetAdjustmentBehavior = .never

        let parentDirectory = indexURL.deletingLastPathComponent()
        webView.loadFileURL(indexURL, allowingReadAccessTo: parentDirectory)
        return webView
    }

    func updateUIView(_ webView: WKWebView, context: Context) {
    }
}
