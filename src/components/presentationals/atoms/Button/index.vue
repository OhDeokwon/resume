<template functional>
  <button
    :class="[
      data.class,
      data.staticClass
    ]"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'Button'
}
</script>

<style scoped lang="scss">
</style>