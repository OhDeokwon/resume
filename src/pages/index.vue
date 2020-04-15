<template>
  <Box class="resume-container" direction="column">
    <PrivacyContainer />
  </Box>
</template>

<script>
import Box from '@/components/presentationals/molecules/Box'
import PrivacyContainer from '@/components/containers/PrivacyContainer'

export default {
  name: 'index',
  components: {
    Box,
    PrivacyContainer
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
  margin: 0 16px;
}

/deep/ .privacy-template {
  padding-top: 3rem;
}
</style>
