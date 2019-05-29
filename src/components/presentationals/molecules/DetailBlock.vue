<template>
  <section>
    <div class="top-layout">
      <paragraph :text="title" class="title" />
      <paragraph :text="date" class="date" />
    </div>
    <div class="position-layout">
      <paragraph :text="position" class="position" />
    </div>
    <div class="content-layout">
      <paragraph :text="content" class="content" />
    </div>
    <horizontal-rule />
  </section>
</template>

<script>
import Paragraph from '../atoms/Paragraph'
import HorizontalRule from '../atoms/HorizontalRule'

export default {
  name: 'DetailBlock',
  components: {
    Paragraph,
    HorizontalRule
  },
  props: {
    title: {
      type: String,
      required: true
    },
    position: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    },
    content: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped lang="scss">
  .top-layout {
    display: flex;

    p {
      font-family: NotoSansKR-Regular, sans-serif;
      margin: 0;
    }
    .date {
      margin-left: auto;
    }
  }

  .position-layout {
    p {
      margin: 6px 0 0 0;
    }
  }
</style>
