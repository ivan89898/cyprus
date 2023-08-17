const { defineConfig } = require("cypress");
module.exports = defineConfig({
  e2e: {
    waitForAnimations: false,
    viewportWidth: 375,
    viewportHeight: 667,
  },
});
