<template>
  <div class="face-content">
    <div class="ears">
      <div class="ear-left"></div>
      <div class="ear-space"></div>
      <div class="ear-right"></div>
    </div>
    <div class="eyes">
      <div class="eye-left"></div>
      <div class="eye-right"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FaceContent'
}
</script>

<style lang="stylus">
  greenSkin = #b4e900
  pinkBrain = #fe338f
  pinkBrainShadow = #ea2e83
  whiteEye = #ffffff
  blackBorder = #292c34

  .face-content

    .ears
      position relative
      display flex
      justify-content space-between
      margin-left -59px
      margin-right -59px
      margin-top -31px

      .ear-right,
      .ear-left
        content ''
        display block
        width 90px
        height 100px
        border-top 25px solid blackBorder
        border-bottom 25px solid blackBorder
        border-radius 50%
        background-color greenSkin

        &:before
          position relative
          display block
          content ''
          width 26px
          height 25px
          background-color blackBorder

      .ear-left
        border-left 25px solid blackBorder
        border-right 25px solid transparent

        &:before
          left 32px
          top -19px
          transform skew(5deg)

      .ear-right
        border-left 25px solid transparent
        border-right 25px solid blackBorder

        &:before
          right 19px
          top -19px
          transform skew(-5deg)

      .ear-space
        position relative
        flex-grow 1
        background-color greenSkin

        &:before,
        &:after
          content ''
          display block
          position absolute
          width 30px
          height 69px
          background-color greenSkin
          bottom 0

        &:before
          left -30px

        &:after
          right -30px

    .eyes
      position relative
      display block
      width 100%
      height 100px
      background-color greenSkin
</style>
