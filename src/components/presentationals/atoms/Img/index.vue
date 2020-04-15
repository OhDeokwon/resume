<template>
  <img :src="src" :alt="alt" :style="styles" />
</template>

<script>
export default {
  name: 'Img',
  props: {
    src: {
      type: String,
      default: ''
    },
    alt: {
      type: String,
      default: ''
    },
    objectFit: {
      type: String,
      default: 'cover'
    }
  },
  computed: {
    styles() {
      return {
        objectFit: this.objectFit
      }
    }
  }
}
</script>

<style scoped lang="scss">
img {
  width: 100%;
  height: 100%;
}
</style>