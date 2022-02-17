const {
  mauve,
  tomato,
  red,
  crimson,
  pink,
  plum,
  purple,
  violet,
  indigo,
  blue,
  sky,
  cyan,
  teal,
  mint,
  green,
  grass,
  lime,
  yellow,
  amber,
  orange,
} = require('@radix-ui/colors')

const matches = {
  1: '1200',
  2: '1100',
  3: '1000',
  4: '900',
  5: '800',
  6: '700',
  7: '600',
  8: '500',
  9: '400',
  10: '300',
  11: '200',
  12: '100',
}

const radixToTailwind = (color) => {
  return Object.entries(color).reduce((acc, [key, value]) => {
    const [, name, intenstiy] = /^(\D*)(\d+)$/.exec(key)
    const newKey = `${name}-${matches[intenstiy]}`
    acc[newKey] = value
    return acc
  }, {})
}

const colors = radixToTailwind({
  ...tomato,
  ...red,
  ...crimson,
  ...pink,
  ...plum,
  ...purple,
  ...violet,
  ...indigo,
  ...blue,
  ...sky,
  ...cyan,
  ...teal,
  ...mint,
  ...green,
  ...grass,
  ...lime,
  ...yellow,
  ...amber,
  ...orange,
  ...mauve,
})
console.log(colors)

module.exports = {
  content: ['./app/**/*.{ts,tsx,jsx,js}'],
  theme: {
    extend: {
      colors,
    },
  },
  variants: {},
  plugins: [],
}
