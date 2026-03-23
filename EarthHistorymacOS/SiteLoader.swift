import Foundation

enum SiteLoader {
    static func localIndexURL() -> URL? {
        if let resourceURL = Bundle.main.resourceURL {
            let siteFolder = resourceURL.appendingPathComponent("Site", isDirectory: true)
            let indexURL = siteFolder.appendingPathComponent("index.html")
            if FileManager.default.fileExists(atPath: indexURL.path) {
                return indexURL
            }
        }

        return Bundle.main.url(forResource: "index", withExtension: "html", subdirectory: "Site")
    }
}
