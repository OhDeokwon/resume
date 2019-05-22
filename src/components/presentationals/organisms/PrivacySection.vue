<template>
  <section>
    <h1>{{ name }}</h1>
    <paragraph class="sub-text" :text="'수정일: ' + date" />
    <paragraph class="sub-text" :text="'이메일: ' + email" />
    <paragraph class="sub-text" :text="'연락처: ' + phone" />
    <paragraph
      class="introduce-text"
      text="
      안녕하세요! 게임 개발자에서 서비스 개발자가 된 김덕원입니다.
      어제의 자신보다 개발을 잘하는 사람이 되기 위해 매일 공부하고 있습니다.
      "
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
    }
  }
}
</script>

<style scoped lang="scss">
h1 { text-align: left; }
.title {
}
</style>
