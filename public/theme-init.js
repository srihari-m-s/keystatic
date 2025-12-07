(function () {
  var storageKey = "theme";

  /**
   * Determine the theme from localStorage or system preference.
   * Falls back to "light" if neither is available.
   */
  function getStoredOrPreferredTheme() {
    try {
      var storedTheme = localStorage.getItem(storageKey);
      if (storedTheme === "light" || storedTheme === "dark") {
        return storedTheme;
      }
    } catch (e) {
      // ignore storage errors
    }

    var prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    return prefersDark ? "dark" : "light";
  }

  /**
   * Apply the given theme to the document and persist it if possible.
   * @param {"light" | "dark"} theme
   */
  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem(storageKey, theme);
    } catch (e) {
      // ignore storage errors
    }
  }

  // Expose helpers for other scripts (e.g. ThemeController)
  try {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore - window extension for vanilla JS file
    window.__themeUtils = {
      getStoredOrPreferredTheme: getStoredOrPreferredTheme,
      applyTheme: applyTheme,
    };
  } catch (e) {
    // If window is not available for some reason, just skip exposure
  }

  // Initialize theme as early as possible to avoid FOUC
  var theme = getStoredOrPreferredTheme();
  applyTheme(theme);
})();
