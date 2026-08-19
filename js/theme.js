/* Journey theme toggle — pairs with the anti-flash snippet in each <head>.
   No saved choice = AUTO (follows the phone). The button pins light or dark. */
(function () {
  var KEY = "jw-theme";
  var root = document.documentElement;

  function effective() {
    if (root.dataset.theme === "dark" || root.dataset.theme === "light") { return root.dataset.theme; }
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  var btns = [].slice.call(document.querySelectorAll(".tbtn"));
  function paint() {
    var dark = effective() === "dark";
    btns.forEach(function (b) {
      b.setAttribute("aria-pressed", dark ? "true" : "false");
      b.setAttribute("title", dark ? "Switch to light theme" : "Switch to dark theme");
    });
  }

  btns.forEach(function (b) {
    b.addEventListener("click", function () {
      var next = effective() === "dark" ? "light" : "dark";
      root.dataset.theme = next;
      try { localStorage.setItem(KEY, next); } catch (e) {}
      paint();
    });
  });

  if (window.matchMedia) {
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", paint);
  }
  paint();
})();
