<template>
  <div class="container">
    <div class="navigation-layout">
      <!-- 아직 추가할까 말까 못 정했음 -->
    </div>
    <div class="main-content-layout">
      <privacy-section-container />
      <antecedents-section-container />
    </div>
  </div>
</template>

<script>
import PrivacySectionContainer from '../components/containers/PrivacySectionContainer'
import AntecedentsSectionContainer from "../components/containers/AntecedentsSectionContainer"

export default {
  name: 'index',
  components: {
    AntecedentsSectionContainer,
    PrivacySectionContainer
  }
}
</script>

<style scoped lang="scss">
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 16px 0 16px;
  }
</style>
