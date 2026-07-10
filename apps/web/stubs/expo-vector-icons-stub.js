// react-native-paper optionally requires @expo/vector-icons inside a try/catch
// to detect whether it's available (Metro handles this fine; Turbopack statically
// bundles it anyway and chokes on the untyped .ttf font import inside). This stub
// throws on require so Paper's try/catch falls through to its no-icon-library
// fallback, matching the same behavior as the package genuinely not being installed.
throw new Error('@expo/vector-icons is not available in the web catalog build');
