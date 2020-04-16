<template>
  <Box tag="section" class="careers-template" direction="column">
    <h2>경력</h2>
    <ShadowBox class="careers-box" direction="column" :xRatio="100" :yRatio="100" :blurRatio="50">
      <template v-for="(career, index) in careers">
        <CareerProjectBox :key="index" :career="careers[0]" />
      </template>
    </ShadowBox>
  </Box>
</template>

<script>
import Box from '@/components/presentationals/molecules/Box'
import ShadowBox from '@/components/presentationals/molecules/ShadowBox'
import CareerProjectBox from '@/components/presentationals/organisms/CareerProjectBox'

export default {
  name: 'CareersTemplate',
  components: {
    Box,
    ShadowBox,
    CareerProjectBox
  },
  props: {
    careers: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.careers-template {
}

.careers-box {
  padding: 24px;
  border-radius: 1rem;
}

h2 {
  margin: 0 0 1rem 1rem;
  font-size: 2.1rem;
  color: #339af0;
}
</style>