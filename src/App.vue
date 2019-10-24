<template>
  <div id="app">
    <BaseNavBar/>
    <div class="container">
      <router-view/>
    </div>
    <BaseFooter />
  </div>
</template>

<script>
import BaseNavBar from './components/BaseNavBar'
import BaseFooter from './components/BaseFooter'

export default {
  components: { BaseFooter, BaseNavBar }
}
</script>

<style lang="stylus">
  .container
    padding-top 100px
    width 500px
    margin 0 auto
</style>
