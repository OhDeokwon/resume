<template>
  <section>
    <h1>{{ name }}</h1>
    <paragraph class="sub-text" :text="'수정일: ' + date" />
    <paragraph class="sub-text" :text="'이메일: ' + email" />
    <paragraph class="sub-text" :text="'연락처: ' + phone" />
    <paragraph
      class="introduce-text"
      :text="introduce"
    />
  </section>
</template>

<script>
import Paragraph from '../atoms/Paragraph'

export default {
  name: 'PrivacySection',
  components: {
    Paragraph,
  },
  props: {
    name: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      required: true
    },
    introduce: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
  h1 { text-align: left; }
  .title {
  }
  .sub-text {
    margin-top: 8px;
    margin-bottom: 8px;
  }
</style>
