<template>
  <component :is="tag" :class="classNames">
    <slot />
  </component>
</template>

<script>
export default {
  name: 'Box',
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    direction: {
      type: String,
      default: 'row'
    },
    vertical: {
      type: String,
      default: 'top'
    },
    horizontal: {
      type: String,
      default: 'left'
    },
    wrap: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    classNames() {
      const isWrap = this.wrap ? 'wrap' : 'no-wrap'
      return `box ${this.direction} v-${this.vertical} h-${this.horizontal} ${isWrap}`
    }
  }
}
</script>

<style lang="scss" scoped>
.box {
  display: flex;
}
.wrap {
  flex-wrap: wrap;
}
.no-wrap {
  flex-wrap: nowrap;
}
.row {
  flex-direction: row;
  &.v-top {
    align-items: flex-start;
  }
  &.v-center {
    align-items: center;
  }
  &.v-bottom {
    align-items: flex-end;
  }
  &.h-left {
    justify-content: flex-start;
  }
  &.h-center {
    justify-content: center;
  }
  &.h-right {
    justify-content: flex-end;
  }
}
.column {
  flex-direction: column;
  &.v-top {
    justify-content: flex-start;
  }
  &.v-center {
    justify-content: center;
  }
  &.v-bottom {
    justify-content: flex-end;
  }
  &.h-left {
    align-items: flex-start;
  }
  &.h-center {
    align-items: center;
  }
  &.h-right {
    align-items: flex-end;
  }
}
</style>
