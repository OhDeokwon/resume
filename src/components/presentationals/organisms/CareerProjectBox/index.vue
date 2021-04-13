<template>
  <Box class="career-project-box" :wrap="false">
    <Box class="company" direction="column">
      <h3>{{ career.company }}</h3>
      <Span class="position">{{ career.position }}</Span>
      <Span class="date">{{ career.date }}</Span>
      <P class="description">{{ career.description }}</P>
    </Box>
    <Box class="projects" direction="column">
      <template v-for="(project, index) in career.projects">
        <ProjectBox :project="project" :key="index" />
      </template>
    </Box>
  </Box>
</template>

<script>
import P from '@/components/presentationals/atoms/P'
import Span from '@/components/presentationals/atoms/Span'
import Box from '@/components/presentationals/molecules/Box'
import ProjectBox from '@/components/presentationals/molecules/ProjectBox'

export default {
  name: 'CareerProjectBox',
  components: {
    P,
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
  flex: 1 0 16rem;

  .position {
    margin-top: 1rem;
  }

  /deep/ .description {
    padding-right: 1.5rem;
    margin-top: 1rem !important;
    font-size: 0.9rem !important;
    color: #868e96 !important;
  }
}

.projects {
  flex: 2 1 auto;
}

@media screen and (max-width: 680px) {
  .career-project-box {
    flex-direction: column !important;

    .company {
      width: 100%;
      padding-bottom: 1rem;
      border-bottom: 1px solid #adb5bd;
      margin-bottom: 1rem;
      flex-basis: auto;
    }
  }

  .profile-img-box {
    margin: 0 auto 1rem auto;
  }
}
</style>