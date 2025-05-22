
export default {
  async init(baseUrl, $page) {
    const theme = {
      "--editor-background": "#000000",
      "--editor-color": "#c9d1d9",
      "--editor-selection": "#264f78",
      "--editor-cursor": "#c9d1d9",
      "--editor-line-highlight": "#161b22",
      "--editor-gutter-background": "#000000",
      "--editor-gutter-color": "#8b949e",
      "--editor-indent-guide": "#444c56",
      "--token-keyword": "#ff7b72",
      "--token-string": "#a5d6ff",
      "--token-function": "#d2a8ff",
      "--token-variable": "#c9d1d9",
      "--token-comment": "#8b949e",
      "--token-number": "#79c0ff",
      "--token-operator": "#ff7b72",
      "--token-constant": "#6cb6ff",
      "--token-type": "#ffa657"
    };

    acode.setTheme("GitHub Dark OLED", "dark", theme);
    acode.toast("Tema aplicado: GitHub OLED");
  },

  destroy() {
    acode.toast("Tema GitHub OLED desactivado");
  }
};
