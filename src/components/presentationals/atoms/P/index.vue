<template functional>
  <p
    :class="[
      data.class,
      data.staticClass,
      props.align
    ]"
  >
    <slot />
  </p>
</template>

<script>
export default {
  name: 'P',
  props: {
    align: {
      type: String,
      default: 'left'
    }
  }
}
</script>

<style scoped lang="scss">
p {
  white-space: pre-line;
  word-break: keep-all;
}
.left {
  text-align: left;
}
.center {
  text-align: center;
}
.right {
  text-align: right;
}
</style>
