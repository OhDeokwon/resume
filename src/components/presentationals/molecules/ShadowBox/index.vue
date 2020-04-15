<template>
  <Box class="shadow-box" ref="shadowBox" :style="styles">
    <slot />
  </Box>
</template>

<script>
/* eslint-disable */
import Box from '@/components/presentationals/molecules/Box'

function clamp(value, min, max) {
  return value < min ? min : value > max ? max : value
}

function rgbaToHsla(r, g, b, a) {
  const red = r / 255
  const green = g / 255
  const blue = b / 255

  const max = Math.max(red, green, blue)
  const min = Math.min(red, green, blue)
  let h, s, l
  l = (max + min) / 2

  if (max == min) {
    h = s = 0
  } else {
    const d = max - min
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
    if (max == red) {
      h = (green - blue) / d + (green < blue ? 6 : 0)
    } else if (max == green) {
      h = (blue - red) / d + 2
    } else if (max == blue) {
      h = (red - green) / d + 4
    }
    h /= 6
  }
  return [h, s, l, a / 255]
}
function hslaToRgba(h, s, l, a) {
  let r, g, b
  if (s == 0) {
    r = g = b = l
  } else {
    const hueToRgb = (p, q, t) => {
      if (t < 0) t += 1
      if (t > 1) t -= 1
      if (t < 1 / 6) return p + (q - p) * 6 * t
      if (t < 1 / 2) return q
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6
      return p
    }
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s
    const p = 2 * l - q
    r = hueToRgb(p, q, h + 1 / 3)
    g = hueToRgb(p, q, h)
    b = hueToRgb(p, q, h - 1 / 3)
  }
  return [r * 255, g * 255, b * 255, a * 255]
}

function hexToRgba(hex) {
  let result = hex
  if (result[0] == '#') {
    result = result.substr(1, result.length)
  }
  const r = parseInt(`0x${result.substr(0, 2)}`, 16)
  const g = parseInt(`0x${result.substr(2, 2)}`, 16)
  const b = parseInt(`0x${result.substr(4, 2)}`, 16)
  let a = 255
  if (result.length >= 8) {
    a = parseInt(result.substr(6, 2), 16)
  }
  return [r, g, b, a]
}
function rgbaToHex(r, g, b, a) {
  const toHex = value => {
    let hex = value.toString(16)
    if (hex.length < 2) {
      hex = '0' + hex
    }
    return hex
  }
  const red = toHex(Math.floor(r))
  const green = toHex(Math.floor(g))
  const blue = toHex(Math.floor(b))
  let alpha = ''
  if (a < 255) {
    alpha = toHex(a)
  }
  return '#' + red + green + blue + alpha
}
function getDarkColor(hex) {
  const rgba = hexToRgba(hex)
  const hsla = rgbaToHsla(rgba[0], rgba[1], rgba[2], rgba[3])
  const dark = hslaToRgba(hsla[0], hsla[1], clamp(hsla[2] - 14 / 100, 0, 1.0), hsla[3])
  return rgbaToHex(dark[0], dark[1], dark[2], dark[3])
}
function getLightColor(hex) {
  const rgba = hexToRgba(hex)
  const hsla = rgbaToHsla(rgba[0], rgba[1], rgba[2], rgba[3])
  const light = hslaToRgba(hsla[0], clamp(hsla[1] - 11 / 100, 0, 1.0), clamp(hsla[2] + 27 / 100, 0, 1.0), hsla[3])
  return rgbaToHex(light[0], light[1], light[2], light[3])
}

export default {
  name: 'ShadowBox',
  components: {
    Box
  },
  extends: {
    Box
  },
  props: {
    color: {
      type: String,
      default: '#f1f3f5'
    }
  },
  data() {
    return {
      width: 0,
      height: 0
    }
  },
  computed: {
    styles() {
      const x = this.width / 10
      const y = this.height / 10
      const blur = this.width / 5
      console.log('x:', x, 'y:', y, 'b:', blur)
      return {
        background: this.color,
        boxShadow: `${x}px ${y}px ${blur}px ${getDarkColor(this.color)}, 
                    ${-x}px ${-y}px ${blur}px ${getLightColor(this.color)}`
      }
    }
  },
  created() {
    window.addEventListener('resize', this.onResize)
  },
  mounted() {
    this.onResize()
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize)
  },
  methods: {
    onResize() {
      this.width = this.$refs.shadowBox.$el.clientWidth
      this.height = this.$refs.shadowBox.$el.clientHeight
      console.log('width:', this.width, 'height:', this.height)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>