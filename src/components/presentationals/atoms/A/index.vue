<template functional>
  <a
    :class="[
      data.class,
      data.staticClass
    ]"
    :href="data.attrs.href"
  >
    <slot />
  </a>
</template>

<script>
export default {
  name: 'A'
}
</script>

<style lang="scss" scoped>
a {
  transition: all 0.22s;
  color: #339af0;

  &:hover {
    color: #1971c2;
  }
}
</style>
