<template>
  <div class="zombie">
    <div class="face-container">
      <div class="face-header">
        <div class="hair">
          <div class="hair-0"></div>
          <div class="hair-1"></div>
          <div class="hair-2"></div>
          <div class="hair-3"></div>
        </div>
        <div class="base"></div>
        <div class="brain"></div>
      </div>
      <div class="face-content"></div>
      <div class="face-footer"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Zombie'
}
</script>

<style lang="stylus">
  greenSkin = #b4e900
  pinkBrain = #fe338f
  whiteEye = #ffffff
  blackBorder = #292c34

  .zombie
    *
      box-sizing border-box

  .face-container
    // background-color: #fafafa
    width 100%
    height 400px

    .face-header
      position relative

      .base
        width 100%
        height 190px
        background-color greenSkin
        border-left 25px solid blackBorder
        border-right 25px solid blackBorder

      .hair
        position absolute

        .hair-0
          top -50px
          left -70px
          position absolute
          width 200px
          height 220px
          background blackBorder
          border-radius 110px

        .hair-1
          position: absolute
          top: 0
          left: -20px
          width: 190px
          height: 175px
          background-color: #b4e900
          border-top-left-radius: 90px
          border-top-right-radius: 165px
          border-bottom-right-radius: 0
          border-bottom-left-radius: 145px

          &:after
            content ''
            position absolute
            width 80px
            height 35px
            background greenSkin
            bottom -15px
            left: 45px
            border-bottom-left-radius: 8px

</style>
