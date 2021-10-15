import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// import reactRefresh from "@vitejs/plugin-react-refresh";

// https://vitejs.dev/config/
export default defineConfig({
  base:'',
  mode:"development",
  plugins: [react({
      babel:{
          parserOpts: {
              plugins:['decorators-legacy']
          }
      }
  })],
  resolve: {
      alias:[{find:'@',replacement:'/src'},{find:'@images',replacement:'/src/assets/images'}]
  },
  css: {
      preprocessorOptions:{
          scss: {
              additionalData:'@import "/src/assets/css/core.scss";'
          }
      }
  }
})
