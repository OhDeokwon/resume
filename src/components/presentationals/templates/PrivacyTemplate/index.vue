<template>
  <Box tag="section" class="privacy-template">
    <ShadowBox class="profile-img-box" direction="row" :xRatio="30" :yRatio="30" :blurRatio="15">
      <Img :src="privacy.profile" />
    </ShadowBox>
    <Box class="introduce-box" direction="column">
      <h1 class="greeting">
        안녕하세요!
        <br />
        {{ privacy.job }}
        <Span class="name">{{ privacy.name }}</Span>입니다.
      </h1>
      <Span class="introduce">{{ privacy.introduce }}</Span>
      <Box class="contacts">
        <template v-for="(button, index) in privacy.buttons">
          <A :href="button.url" :key="index">
            <ShadowBox class="contact-box" vertical="center">
              <Img :src="button.icon" />
            </ShadowBox>
          </A>
        </template>
        <A :href="mailTo">
          <ShadowBox
            class="contact-box"
            vertical="center"
            :xRatio="30"
            :yRatio="30"
            :blurRatio="15"
          >
            <Img src="images/email.svg" />
            <Span>{{ privacy.email }}</Span>
          </ShadowBox>
        </A>
        <A :href="tel">
          <ShadowBox
            class="contact-box"
            vertical="center"
            :xRatio="30"
            :yRatio="30"
            :blurRatio="15"
          >
            <Img src="images/phone.svg" />
            <Span>{{ privacy.phone }}</Span>
          </ShadowBox>
        </A>
      </Box>
    </Box>
  </Box>
</template>

<script>
import A from '@/components/presentationals/atoms/A'
import Img from '@/components/presentationals/atoms/Img'
import Span from '@/components/presentationals/atoms/Span'
import Box from '@/components/presentationals/molecules/Box'
import ShadowBox from '@/components/presentationals/molecules/ShadowBox'

export default {
  name: 'PrivacyTemplate',
  components: {
    A,
    Img,
    Span,
    Box,
    ShadowBox
  },
  props: {
    privacy: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  computed: {
    mailTo() {
      return `mailto:${this.privacy.email}`
    },
    tel() {
      return `tel:${this.privacy.phone}`
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
  padding: 0 3rem;
  // flex-grow: 1;
  // flex-basis: 45rem;
  flex: 1 0 45rem;
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