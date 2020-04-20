<template>
  <Box class="resume-container" direction="column">
    <PrivacyContainer />
    <CareerContainer />
    <ActivitiesContainer />
  </Box>
</template>

<script>
import Box from '@/components/presentationals/molecules/Box'
import PrivacyContainer from '@/components/containers/PrivacyContainer'
import CareerContainer from '@/components/containers/CareerContainer'
import ActivitiesContainer from '@/components/containers/ActivitiesContainer'

export default {
  name: 'index',
  components: {
    Box,
    PrivacyContainer,
    CareerContainer,
    ActivitiesContainer
  }
}
</script>

<style scoped lang="scss">
.resume-container {
  width: 100%;
  max-width: 60rem;
  margin: auto;
}

section {
  padding: 0 16px 3rem 16px;
}

/deep/ .privacy-template {
  padding-top: 3rem;
}
</style>
