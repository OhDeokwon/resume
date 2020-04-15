<template>
  <span :class="align">{{ text }}</span>
</template>

<script>
import Paragraph from "./Paragraph"

export default {
  name: "Span",
  extends: Paragraph
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
