<template>
  <Box class="project-box" direction="column">
    <h4 class="name">{{ project.name }}</h4>
    <Span class="date">{{ project.date }}</Span>
    <P class="description">{{ project.description }}</P>
    <ul class="work-list">
      <template v-for="(work, index) in project.works">
        <li class="work" :key="index">{{ work }}</li>
      </template>
    </ul>
    <ShadowBox class="skill">{{ project.skill }}</ShadowBox>
  </Box>
</template>

<script>
import Box from '@/components/presentationals/molecules/Box'
import ShadowBox from '@/components/presentationals/molecules/ShadowBox'

export default {
  name: 'ProjectBox',
  components: {
    Box,
    ShadowBox
  },
  props: {
    project: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.name {
  font-size: 1.6rem;
}

.date {
}

.description {
}

.work-list {
}

.skill {
}
</style>
