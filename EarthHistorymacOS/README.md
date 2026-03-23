# EarthHistorymacOS

Native macOS SwiftUI wrapper for the deep-time website.

## Structure

- `EarthHistorymacOSApp.swift`: App entry point
- `SiteWebView.swift`: `WKWebView` wrapper for macOS
- `SiteLoader.swift`: Locates the bundled website
- `Resources/Site`: Local copy of the website and media assets

## Xcode Setup

1. Create a new macOS App project named `EarthHistorymacOS`.
2. Replace the generated Swift files with the files in this folder.
3. Add `Resources/Site` to the target as a folder reference with `Copy items if needed`.
4. Build and run on macOS.

The app loads the bundled website locally, preserving the same visuals and interactions as the browser version.
