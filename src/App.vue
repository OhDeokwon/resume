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
  background-color: #f1f3f5;
}
</style>
