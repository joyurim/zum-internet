const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @import "@/assets/styles/global/variables.scss";
          @import "@/assets/styles/global/common.scss";
        `,
      },
    },
  },
})
