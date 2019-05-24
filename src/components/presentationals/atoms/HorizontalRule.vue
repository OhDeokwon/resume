<template>
  <hr :class="weight" />
</template>

<script>
export default {
  name: 'HorizontalRule',
  props: {
    weight: {
      type: String,
      default: 'thin'
    }
  }
}
</script>

<style scoped lang="scss">
  hr {
    display: block;
    max-width: 100%;
    max-height: 0;
    height: 0;
    border: solid;
  }
  .thin {
    border-color: var(--gray);
    border-width: thin;
  }
  .thick {
    border-width: medium;
    border-color: var(--gray-3);
    /*border-width: thick;*/
  }
</style>
