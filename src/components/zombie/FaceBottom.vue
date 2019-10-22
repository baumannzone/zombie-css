<template>
  <div class="face-footer">
    <div class="wrapper">
      <div class="nose-container">
        <div class="nose"></div>
      </div>
      <div class="mouth-container">
        <div class="mouth">
          <div class="teeth"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FaceBottom'
}
</script>

<style lang="stylus">
  greenSkin = #b4e900
  pinkBrain = #fe338f
  pinkBrainShadow = #ea2e83
  whiteEye = #ffffff
  blackBorder = #292c34

  .face-footer
    position relative
    margin-top -32px
    margin-bottom 200px
    .wrapper
      width 100%
      height 350px
      background-color greenSkin
      border-radius 0 0 50% 50%
      border-bottom 25px solid blackBorder
      border-left 25px solid blackBorder
      border-right 25px solid blackBorder

      .nose-container
        display flex
        justify-content center

        .nose
          position relative
          width 40px
          height 40px
          background-color blackBorder
          transform rotate(45deg)

          &:after,
          &:before
            position absolute
            display block
            content ''
            width 40px
            height 40px
            background-color blackBorder
            border-radius 50%

          &:after
            right -50%
          &:before
            bottom -50%

      .mouth-container
        display flex
        justify-content center
        margin-top 90px

        .mouth
          width 250px
          height 80px
          background-color blackBorder
          border-radius 50% 50% 50% 50% / 85% 85% 15% 15%

</style>
