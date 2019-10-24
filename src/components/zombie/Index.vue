<template>
  <div class="zombie">
    <div class="face-container">
      <FaceTop />
      <FaceContent />
      <FaceBottom />
    </div>
  </div>
</template>

<script>
import FaceTop from './FaceTop'
import FaceContent from './FaceContent'
import FaceBottom from './FaceBottom'

export default {
  name: 'Zombie',
  components: { FaceTop, FaceContent, FaceBottom }
}
</script>

<style lang="stylus">
  .zombie
    margin-top 200px
    *
      box-sizing border-box

  .face-container
    width 100%
    height 400px

</style>
