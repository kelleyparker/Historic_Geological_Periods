# EarthHistoryiOS

Native iOS SwiftUI wrapper for the deep-time website.

## Structure

- `EarthHistoryiOSApp.swift`: App entry point
- `SiteWebView.swift`: `WKWebView` wrapper for iOS
- `SiteLoader.swift`: Locates the bundled website
- `Resources/Site`: Local copy of the website and media assets

## Xcode Setup

1. Create a new iOS App project named `EarthHistoryiOS`.
2. Replace the generated Swift files with the files in this folder.
3. Add `Resources/Site` to the target as a folder reference with `Copy items if needed`.
4. Build and run on iPhone or iPad.

The app loads the local `index.html` so it behaves like the website while remaining fully self-contained.
