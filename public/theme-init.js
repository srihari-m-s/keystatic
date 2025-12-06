(function () {
  const storageKey = "theme";

  try {
    const storedTheme = localStorage.getItem(storageKey);
    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    const theme =
      storedTheme === "light" || storedTheme === "dark"
        ? storedTheme
        : prefersDark
          ? "dark"
          : "light";

    document.documentElement.setAttribute("data-theme", theme);
  } catch (e) {
    // If accessing localStorage fails, do nothing and keep default theme
  }
})();
