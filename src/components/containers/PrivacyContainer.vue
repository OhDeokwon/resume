<template>
  <PrivacyTemplate :privacy="privacy" />
</template>

<script>
import data from '@/assets/scripts/data'
import PrivacyTemplate from '@/components/presentationals/templates/PrivacyTemplate'

export default {
  name: 'PrivacyContainer',
  components: {
    PrivacyTemplate
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