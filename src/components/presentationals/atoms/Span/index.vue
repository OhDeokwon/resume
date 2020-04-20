<template functional>
  <span
    :class="[
      data.class,
      data.staticClass,
      props.align
    ]"
  >
    <slot />
  </span>
</template>

<script>
import P from '../P'

export default {
  name: 'Span',
  extends: P
}
</script>

<style scoped lang="scss">
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
