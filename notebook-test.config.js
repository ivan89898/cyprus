const { defineConfig } = require("cypress");
module.exports = defineConfig({
  e2e: {
    waitForAnimations: false,
    viewportWidth: 1366,
    viewportHeight: 768,
  },
});
