<template>
  <div class="home">
    <div class="container">
      <Zombie/>
    </div>
  </div>
</template>

<script>
import Zombie from '@/components/zombie/Index.vue'

export default {
  name: 'home',
  components: {
    Zombie
  }
}
</script>

<style lang="stylus">
  .home
    width 700px
    margin 0 auto
  .container
    padding-top 100px
    width 500px
    margin 0 auto
</style>
