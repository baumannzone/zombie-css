<template>
  <div class="container home">
    <Zombie/>
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
  .container
    padding-top 100px
    width 500px
    margin 0 auto
</style>
