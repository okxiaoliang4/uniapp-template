import { defineConfig, transformerDirectives } from 'unocss'
import presetWeapp from 'unocss-preset-weapp'

export default defineConfig({
  presets: [
    // https://github.com/MellowCo/unocss-preset-weapp
    presetWeapp(),
  ],
  shortcuts: [
    {
      'center': 'flex justify-center items-center',
    },
  ],
  transformers: [
    transformerDirectives({}),
  ],
})