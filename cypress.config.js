const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://tradenation.com",
    viewportWidth: 1280,
    viewportHeight: 800,
    chromeWebSecurity: false,
    proxy: {
      "/": {
        target: "https://tradenation.com",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
