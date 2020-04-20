<template>
  <ActivitiesTemplate :activities="activities" />
</template>

<script>
import data from '@/assets/scripts/data'
import ActivitiesTemplate from '@/components/presentationals/templates/ActivitiesTemplate'

export default {
  name: 'ActivitiesContainer',
  components: {
    ActivitiesTemplate
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