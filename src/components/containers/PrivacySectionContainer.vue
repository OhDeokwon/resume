<template>
  <PrivacySection
    :name="privacy.name"
    :date="privacy.updated"
    :email="privacy.email"
    :phone="privacy.phone"
    :introduce="privacy.introduce"
  />
</template>

<script>
import PrivacySection from '../presentationals/organisms/PrivacySection'

import data from '../../assets/scripts/data'

export default {
  name: 'PrivacySectionContainer',
  components: {
    PrivacySection
  },
  data() {
    return {
      privacy: data.privacy
    }
  }
}
</script>

<style scoped>

</style>
