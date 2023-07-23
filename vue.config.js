const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  crossorigin: "",
  devServer: {
    proxy: "http://localhost:9000",
  },
});
