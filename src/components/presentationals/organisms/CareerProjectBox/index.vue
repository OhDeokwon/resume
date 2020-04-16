<template>
  <Box class="career-project-box" direction="row" :wrap="false">
    <Box class="company" direction="column">
      <h3 class="name">{{ career.company }}</h3>
      <Span class="position">{{ career.position }}</Span>
      <Span class="date">{{ career.date }}</Span>
    </Box>
    <Box class="projects" direction="column">
      <template v-for="(project, index) in career.projects">
        <ProjectBox :project="project" :key="index" />
      </template>
    </Box>
  </Box>
</template>

<script>
import Span from '@/components/presentationals/atoms/Span'
import Box from '@/components/presentationals/molecules/Box'
import ProjectBox from '@/components/presentationals/molecules/ProjectBox'

export default {
  name: 'CareerProjectBox',
  components: {
    Span,
    Box,
    ProjectBox
  },
  props: {
    career: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.career-project-box {
  width: 100%;
}

.company {
  flex: 1 1 20rem;

  .name {
    font-size: 1.9rem;
  }

  .position {
    margin-top: 1rem;
  }

  .date {
  }
}

.projects {
  flex: 2 1 auto;
}
</style>