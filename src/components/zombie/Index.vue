<template>
  <div class="zombie">
    <div class="face-container">
      <div class="face-header">
        <div class="base"></div>
        <div class="brain">
          <div class="brain-0"></div>
          <div class="brain-1"></div>
          <div class="brain-2"></div>
          <div class="brain-shadows"></div>
        </div>
        <div class="brain-border">
          <!--<div class="brain-border-0"></div>-->
          <div class="brain-border-1"></div>
        </div>
        <div class="hair">
          <div class="hair-0-bg"></div>
          <div class="hair-1"></div>
          <div class="hair-2"></div>
          <div class="hair-3"></div>
        </div>
      </div>
      <FaceContent/>
      <div class="face-footer"></div>
    </div>
  </div>
</template>

<script>
import FaceContent from './FaceContent'

export default {
  name: 'Zombie',
  components: { FaceContent }
}
</script>

<style lang="stylus">
  greenSkin = #b4e900
  pinkBrain = #fe338f
  pinkBrainShadow = #ea2e83
  whiteEye = #ffffff
  blackBorder = #292c34

  .zombie
    margin-top 200px
    *
      box-sizing border-box

  .face-container
    // background-color: #fafafa
    width 100%
    height 400px

    .face-header
      position relative

      .base
        position: relative
        width 100%
        height 120px
        background-color greenSkin

        &:before
          content: ''
          position: absolute
          height: 100px
          background: #b4e900
          bottom: 0
          left: -4px
          width 10px
          border-left 25px solid blackBorder
          transform skew(4deg)

        &:after
          content: ''
          position: absolute
          height: 150px
          background: #b4e900
          bottom: 0
          right: -4px
          width 10px
          border-right 25px solid blackBorder
          transform skew(-2deg)

      .brain
        position absolute
        right 0

        .brain-0
          position absolute
          top -330px
          left -205px
          width 165px
          height 160px
          border-radius 50%
          background-color pinkBrain

          &:before
            position relative
            display block
            content ''
            top -24px
            left -25px
            width 160px
            height 160px
            border-top 25px solid blackBorder
            border-left 25px solid transparent
            border-right 25px solid blackBorder
            border-bottom 25px solid transparent
            border-radius 50%
            transform rotate(-10deg)

        .brain-1
          position absolute
          top -240px
          left -100px
          width 120px
          height 121px
          border-radius 50%
          background-color pinkBrain
          border-top 25px solid blackBorder
          border-right 25px solid blackBorder
          border-bottom 25px solid blackBorder
          border-left 25px solid transparent
          transform rotate(25deg)

          &:after
            position absolute
            content ''
            display block
            width 50px
            height 50px
            border-bottom 6px solid pinkBrainShadow
            border-right 6px solid pinkBrainShadow
            border-radius 50%
            transform: rotate(-90deg)
            top: 7px
            left 6px

        .brain-2
          position: absolute
          width 125px
          height 79px
          top -227px
          left -184px
          border-radius 50%
          background-color pinkBrain

          &:after
            position absolute
            content ''
            width 30px
            height 50px
            border-right 25px solid blackBorder
            border-top 25px solid transparent
            border-left 25px solid transparent
            border-bottom 25px solid transparent
            border-radius 50%

        .brain-shadows
          position: absolute
          width 110px
          height 100px
          top -320px
          left -180px
          border-radius 50%
          border-top 12px solid pinkBrainShadow
          border-left 12px solid pinkBrainShadow
          transform rotate(25deg)

      .brain-border
        position absolute
        right 0
        top -302px

        .brain-border-0
          position absolute
          width 108px
          height 86px
          right -21px
          bottom -34px
          border-radius 50%
          border-bottom 25px solid blackBorder
          border-left 25px solid blackBorder
          border-top 25px solid transparent
          border-right 25px solid transparent

        .brain-border-1
          position: relative
          transform rotate(35deg)
          right -49px
          width 270px
          height 300px
          border-bottom 25px solid blackBorder
          border-left 25px solid transparent
          border-top 25px solid transparent
          border-right 25px solid transparent
          border-radius 50%

      .hair
        position absolute
        top -180px

        .hair-0-bg
          z-index -100
          position: absolute
          top 40px
          width 450px
          height 160px
          background-color greenSkin
          border-top-right-radius 50%

        .hair-1
          position absolute
          width 240px
          height 240px
          top -30px
          left -90px
          border-radius 50%
          background-color #292c34

          &:before
            content ''
            position absolute
            top 80px
            left 80px
            width 160px
            height 160px
            background-color greenSkin
            border-radius 50%

          &:after
            content ''
            position absolute
            bottom 0
            left 108px
            width 40px
            height 25px
            background-color greenSkin
            transform rotate(-5deg)

        .hair-2
          position absolute
          width 181px
          height 230px
          top -60px
          left 120px
          border-radius 50%
          background-color #292c34

          &:before
            content ''
            position absolute
            top 111px
            left 16px
            width 148px
            height 120px
            background-color greenSkin
            border-top-left-radius 50%
            border-top-right-radius 50%

          &:after
            content ''
            position absolute
            top 143px
            left 141px
            width 30px
            height 60px
            background-color greenSkin
            border-radius 25%
            transform rotate(-29deg)

        .hair-3
          position absolute
          width 60px
          height 65px
          top -20px
          left 255px
          border-radius 50%
          background-color #292c34
          transform rotate(-15deg)

</style>
