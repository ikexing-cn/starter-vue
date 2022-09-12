import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    { center: 'flex items-center justify-center' },
    { between: 'flex items-center justify-between' },
    { btn: 'rounded select-none px-2 py-1 inline-block bg-gray-600 text-white' },
  ],
  rules: [
    [
      /^truncate-(\d+)$/,
      ([, d]) => ({
        'overflow': 'hidden',
        'display': '-webkit-box',
        'text-overflow': 'ellipsis',
        '-webkit-line-clamp': d,
        '-webkit-box-orient': 'vertical',
      }),
    ],
    [
      /^center-text-(\d+)$/,
      ([, d]) => ({
        'height': `${d}px`,
        'align-items': 'center',
        'line-height': `${Number(d) - 2}px`,
      }),
    ],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
  ],
})
