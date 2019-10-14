<template>
  <div id="app">
    <div class="container">
      <BaseNavBar/>
      <router-view/>
    </div>
  </div>
</template>
<script>
import BaseNavBar from './components/BaseNavBar'

export default {
  components: { BaseNavBar }
}
</script>

<style lang="stylus">
  .container
    width 500px
    margin 0 auto
</style>
