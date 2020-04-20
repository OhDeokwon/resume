<template>
  <Box class="activity-box" direction="column">
    <h4>
      {{ activity.title }}
    </h4>
    <Span class="position">
      {{ activity.position }}
      <Span class="date">
        ({{ activity.date }})
      </Span>
    </Span>
    <Span class="description">
      {{ activity.description }}
    </Span>
  </Box>
</template>

<script>
import Span from '@/components/presentationals/atoms/Span'
import Box from '@/components/presentationals/molecules/Box'

export default {
  name: 'ActivityBox',
  components: {
    Span,
    Box
  },
  props: {
    activity: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style lang="scss" scoped>
/deep/ .date {
  margin-bottom: 1rem;
  color: #868e96;
}

/deep/ .description {
  margin: 1rem 0;
}
</style>