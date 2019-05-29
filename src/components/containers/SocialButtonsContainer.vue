<template>
  <social-buttons
    :buttons = buttons
  />
</template>

<script>
import SocialButtons from '../presentationals/organisms/SocialButtons'

import data from '../../assets/scripts/data'

export default {
  name: 'SocialButtonsContainer',
  components: {
    SocialButtons
  },
  data() {
    return {
      buttons: data.buttons
    }
  }
}
</script>

<style scoped>

</style>
