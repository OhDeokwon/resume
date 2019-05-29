<template>
  <div>
    <horizontal-rule />
    <a
      v-for="(button, index) in buttons"
      :key="index"
      :href="button.url"
    >
      <img :src="button.image" alt="Social Button Image">
    </a>
  </div>
</template>

<script>
import HorizontalRule from '../atoms/HorizontalRule'

export default {
  name: 'SocialButtons',
  components: {
    HorizontalRule
  },
  props: {
    buttons: {
      type: Array,
      default: null
    }
  }
}
</script>

<style scoped lang="scss">
  button {
    background-color: white;
    outline: none;
  }
</style>
