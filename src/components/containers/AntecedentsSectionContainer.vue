<template>
  <antecedents-section
   :categories="categories"
  />
</template>

<script>
import AntecedentsSection from "../presentationals/organisms/AntecedentsSection";

import data from '../../assets/scripts/data'

export default {
  name: 'AntecedentsSectionContainer',
  components: {
    AntecedentsSection
  },
  data() {
    return {
      categories: data.antecedents
    }
  }
}
</script>

<style scoped>

</style>
