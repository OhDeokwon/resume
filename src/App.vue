<template>
  <div id="app">
    <page />
  </div>
</template>

<script>
import Page from './pages/index'

export default {
  name: 'app',
  components: {
    Page
  }
}
</script>

<style lang="scss" scoped>
#app {
  width: 100vw;
  max-width: 100%;
  min-height: 100vh;
}
</style>
