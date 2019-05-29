<template>
  <section>
    <category-block
      v-for="(category, index) in categories"
      :title="category.title"
      :blocks="category.blocks"
      :key="index"
    />
  </section>
</template>

<script>
import CategoryBlock from '../molecules/CategoryBlock'

export default {
  name: 'AntecedentsSection',
  components: {
    CategoryBlock
  },
  props: {
    categories: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">

</style>
