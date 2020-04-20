<template functional>
  <Box class="project-box" direction="column">
    <h4 class="name">{{ props.project.name }}</h4>
    <Span class="date">{{ props.project.date }}</Span>
    <P class="description">{{ props.project.description }}</P>
    <ul class="work-list">
      <template v-for="(work, index) in props.project.works">
        <li class="work" :key="index">{{ work }}</li>
      </template>
    </ul>
    <Box>
      <template v-for="(skill, index) in props.project.skills">
        <component
          class="skill"
          vertical="center"
          :key="index"
          :is="injections.components.ShadowBox"
          :xRatio="30"
          :yRatio="30"
          :blurRatio="15"
        >
          <img :src="skill.icon" />
          <Span>
            <b>{{ skill.name }}</b>
          </Span>
        </component>
      </template>
    </Box>
  </Box>
</template>

<script>
import Span from '@/components/presentationals/atoms/Span'
import Box from '@/components/presentationals/molecules/Box'
import ShadowBox from '@/components/presentationals/molecules/ShadowBox'

export default {
  name: 'ProjectBox',
  inject: {
    components: {
      default: {
        Span,
        Box,
        ShadowBox
      } 
    },
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
  margin-bottom: 1rem;
}

.description {
  margin-bottom: 0.5rem;
}

.work-list {
  margin-bottom: 0.5rem;
}

.skill {
  padding: 8px 10px;
  border-radius: 3rem;
  margin-bottom: 1rem;

  &:not(:last-child) {
    margin-right: 0.8rem;
  }

  img {
    width: 16px;
    height: 16px;
  }

  span {
    margin-left: 8px;
    font-size: 0.7rem;
    line-height: 1.4;
  }
}
</style>
