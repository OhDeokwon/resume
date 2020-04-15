<template>
  <PrivacyTemplate :data="privacy" />
</template>

<script>
import data from '@/assets/scripts/data'

import PrivacyTemplate from '@/components/templates/PrivacyTemplate'

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