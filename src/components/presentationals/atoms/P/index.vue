<template>
  <p :class="align">{{ text }}</p>
</template>

<script>
export default {
  name: "P",
  props: {
    text: {
      type: [String, Number],
      required: true
    },
    align: {
      type: String,
      default: "left"
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
