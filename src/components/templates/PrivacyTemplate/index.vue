<template>
  <Box tag="section" class="privacy-template">
    <ShadowBox class="profile-img-box" direction="row">
      <Img :src="data.profile" />
    </ShadowBox>
    <Box class="introduce-box" direction="column">
      <h1 class="greeting">
        안녕하세요!
        <br />
        {{ data.job }}
        <Span class="name">{{ data.name }}</Span>입니다.
      </h1>
      <Span class="introduce">{{ data.introduce }}</Span>
      <Box class="contacts">
        <template v-for="(button, index) in data.buttons">
          <a :href="button.url" :key="index">
            <ShadowBox class="contact-box" vertical="center">
              <Img :src="button.icon" />
            </ShadowBox>
          </a>
        </template>
        <a :href="mailTo">
          <ShadowBox class="contact-box" vertical="center">
            <Img src="images/email.svg" />
            <Span>{{ data.email }}</Span>
          </ShadowBox>
        </a>
        <a :href="tel">
          <ShadowBox class="contact-box" vertical="center">
            <Img src="images/phone.svg" />
            <Span>{{ data.phone }}</Span>
          </ShadowBox>
        </a>
      </Box>
    </Box>
  </Box>
</template>

<script>
import Img from '@/components/presentationals/atoms/Img'
import Box from '@/components/presentationals/molecules/Box'
import ShadowBox from '@/components/presentationals/molecules/ShadowBox'

export default {
  name: 'PrivacyTemplate',
  components: {
    Img,
    Box,
    ShadowBox
  },
  props: {
    data: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  computed: {
    mailTo() {
      return `mailto:${this.data.email}`
    },
    tel() {
      return `tel:${this.data.phone}`
    }
  }
}
</script>

<style scoped lang="scss">
.privacy-box {
  width: 100%;
  padding: 0 1rem;
}

.profile-img-box {
  width: 10rem;
  height: 10rem;
  padding: 8px;
  margin: 8px 0;
  border-radius: 50%;
  overflow: hidden;

  /deep/ img {
    border-radius: 50%;
  }
}

.introduce-box {
  width: 100%;
  margin: 0 16px;
  flex-grow: 1;
  flex-basis: 45rem;
  .greeting {
    margin-bottom: 16px;
    font-size: 2.5rem;

    .name {
      color: #339af0;
    }
  }

  .introduce {
    font-size: 1.5rem;
  }
}

.contacts {
  margin-top: 16px;

  a {
    transition: all 0.22s;
    color: #339af0;

    &:hover {
      color: #1971c2;
    }
  }

  .contact-box {
    padding: 0.6rem;
    margin: 0.5rem;
    border-radius: 3rem;
    font-size: 0.7rem;

    span {
      line-height: 1.4;
      margin-left: 8px;
    }

    /deep/ img {
      width: 16px;
      height: 16px;
    }
  }
}
</style>