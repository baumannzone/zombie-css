<template>
  <div class="home">
    <Zombie />
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
    padding-top 30px
</style>
