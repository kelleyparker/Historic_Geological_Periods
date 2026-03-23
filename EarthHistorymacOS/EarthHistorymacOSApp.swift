import SwiftUI

@main
struct EarthHistorymacOSApp: App {
    var body: some Scene {
        WindowGroup("Earth Through Deep Time") {
            SiteContainerView()
                .frame(minWidth: 1100, minHeight: 760)
        }
        .windowStyle(.titleBar)
    }
}
