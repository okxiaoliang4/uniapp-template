import path from 'path'
import { defineConfig } from 'vite'
import Unocss from 'unocss/vite'
import transformClass from 'unplugin-transform-class/vite'
import uni from '@dcloudio/vite-plugin-uni'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import VueI18n from '@intlify/unplugin-vue-i18n/vite'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [
    // ------------Unocss-----------
    // 使用weapp预设https://github.com/MellowCo/unocss-preset-weapp
    //
    // app打包配置
    // uniapp打包app时，打包2次，一次使用 vue 模式打包h5，第2次使用 nvue 模式打包app，
    // 第2次打包 unocss 会抛出warn
    // entry module not found, have you add `import 'uno.css'` in your main entry?
    // 导致打包终止
    process.env.UNI_COMPILER !== 'nvue' ? Unocss() : undefined,

    // https://github.com/MellowCo/unplugin-transform-we-class
    transformClass(),
    // ------------Unocss-----------

    // https://github.com/antfu/unplugin-vue-components
    Components({
      dts: 'src/components.d.ts',
      dirs: ['src/components'],
      types: [],
      allowOverrides: true,
    }),

    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: [
        'vue',
        '@vueuse/core',
        'pinia',
        'uni-app',
      ],
      dirs: [
        'src/composables',
        'src/store',
      ],
      dts: 'src/auto-imports.d.ts',
      vueTemplate: true,
    }),

    // https://github.com/intlify/bundle-tools/tree/main/packages/unplugin-vue-i18n
    VueI18n({
      runtimeOnly: true,
      compositionOnly: true,
      include: [path.resolve(__dirname, 'locales/**')],
    }),

    uni(),
  ],
})
