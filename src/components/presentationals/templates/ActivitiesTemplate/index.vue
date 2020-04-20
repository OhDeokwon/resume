<template>
  <Box tag="section" class="activities-template" direction="column">
    <h2>프로젝트 및 활동</h2>
    <ShadowBox class="activities-box" direction="column" :xRatio="100" :yRatio="100" :blurRatio="50">
      <template v-for="(activity, index) in activities">
        <ActivitysBox :key="index" :activity="activity" />
      </template>
    </ShadowBox>
  </Box>
</template>

<script>
import Box from '@/components/presentationals/molecules/Box'
import ShadowBox from '@/components/presentationals/molecules/ShadowBox'
import ActivitysBox from '@/components/presentationals/organisms/ActivityBox'

export default {
  name: 'ActivitiesTemplate',
  components: {
    Box,
    ShadowBox,
    ActivitysBox
  },
  props: {
    activities: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.activities-box {
  padding: 24px;
  border-radius: 1rem;
}

h2 {
  margin: 0 0 1rem 1rem;
}
</style>