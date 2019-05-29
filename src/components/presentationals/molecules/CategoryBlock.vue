<template>
  <div class="layout">
    <horizontal-rule weight="thick" />
    <paragraph :text="title" class="title" />
    <article class="article">
      <detail-block
        v-for="(block, index) in blocks"
        :title="block.title"
        :position="block.position"
        :date="block.date"
        :content="block.content"
        :showLine="index !== (blocks.length - 1)"
        :key="index"
      />
    </article>
  </div>
</template>

<script>
import HorizontalRule from '../atoms/HorizontalRule'
import Paragraph from '../atoms/Paragraph'
import DetailBlock from './DetailBlock'

export default {
  name: 'CategoryBlock',
  components: {
    HorizontalRule,
    Paragraph,
    DetailBlock
  },
  props: {
    title: {
      type: String,
      required: true
    },
    blocks: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
  .layout {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;

    .title {
      flex: 1 1 auto;
      font-family: NotoSansKR-Medium;
      margin: 16px 30px 8px 0;
    }

    .article {
      margin-top: 16px;
      flex: 1 1 70%;
    }
  }
</style>
