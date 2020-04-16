<template>
  <CareersTemplate :careers="careers" />
</template>

<script>
import data from '@/assets/scripts/data'
import CareersTemplate from '@/components/presentationals/templates/CareersTemplate'

export default {
  name: 'CareerContainer',
  components: {
    CareersTemplate
  },
  data() {
    return {
      ...data
    }
  }
}
</script>

<style lang="scss" scoped>
</style>