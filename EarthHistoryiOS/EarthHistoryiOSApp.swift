import SwiftUI

@main
struct EarthHistoryiOSApp: App {
    var body: some Scene {
        WindowGroup {
            NavigationStack {
                SiteContainerView()
                    .navigationTitle("Earth Through Deep Time")
                    .navigationBarTitleDisplayMode(.inline)
            }
        }
    }
}
