(function () {
  const root = document.documentElement;
  const toggles = document.querySelectorAll("[data-theme-toggle]");

  if (!toggles.length) {
    return;
  }

  const getTheme = () => {
    return root.dataset.theme === "indian" ? "indian" : "wolf";
  };

  const applyTheme = (theme) => {
    const normalizedTheme = theme === "indian" ? "indian" : "wolf";
    root.dataset.theme = normalizedTheme;
    sessionStorage.setItem("studiowolf-theme", normalizedTheme);

    toggles.forEach((toggle) => {
      toggle.checked = normalizedTheme === "indian";
    });
  };

  applyTheme(getTheme());

  toggles.forEach((toggle) => {
    toggle.addEventListener("change", () => {
      applyTheme(toggle.checked ? "indian" : "wolf");
    });
  });
})();
