// https://nuxt.com/docs/api/configuration/nuxt-config
import path from 'path';

export default defineNuxtConfig({
  // ssr: true,
  // nitro: {
  //   preset: 'service-worker',
  // },
  // app: {
  //   baseURL: '/Nuxt3-test/',
  // },
  srcDir: 'src',
  alias: {
    '@/': `${path.resolve(__dirname, 'src')}/`,
    '@assets': `${path.resolve(__dirname, 'src/assets')}/`,
    '@components': `${path.resolve(__dirname, 'src/components')}/`,
    '@images': `${path.resolve(__dirname, 'src/assets/images')}/`,
    '@style': `${path.resolve(__dirname, 'src/assets/style')}/`,
  },
  css: ['@style/all.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
          // use 一定要放最前面
          @use "@/assets/style/config/variables" as var;
  
          // custom
          @import "@/assets/style/config/functions";
          @import "@/assets/style/config/mixins";
          @import "@/assets/style/config/extend";
        `,
        },
      },
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
