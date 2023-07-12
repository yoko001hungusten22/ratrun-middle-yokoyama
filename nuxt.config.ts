export default defineNuxtConfig({
  css: ["assets/scss/main.scss"],


 ssr: false,


 vite: {
   css: {
     preprocessorOptions: {
       scss: {
         additionalData: '@import "@/assets/scss/common.scss";',
       },
     },
   },
 },
});