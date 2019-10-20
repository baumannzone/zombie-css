<template>
  <div class="zombie">
    <div class="face-container">
      <div class="face-header">
        <div class="base"></div>
        <div class="brain">
          <div class="brain-0"></div>
          <div class="brain-1"></div>
          <div class="brain-2"></div>
          <div class="brain-3"></div>
        </div>
        <div class="hair">
          <div class="hair-0"></div>
          <div class="hair-1"></div>
          <div class="hair-2"></div>
          <div class="hair-3"></div>
        </div>
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
        border-top-right-radius: 30%;
        &:before
        &:after
          content: ''
          position: absolute
          width: 10px
          height: 100px
          background: #b4e900
          bottom: 0

        &:before
          left: -4px
          border-left 25px solid blackBorder
          transform skew(4deg)

        &:after
          right: -4px
          border-right 25px solid blackBorder
          transform skew(-4deg)

      .brain
        position absolute
        right 0
        top -300px

        .brain-0
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

        .brain-1
          position: relative
          transform rotate(25deg)
          right -30px
          width 250px
          height 300px
          border-bottom 25px solid blackBorder
          border-left 25px solid transparent
          border-top 25px solid transparent
          border-right 25px solid transparent
          border-radius 50%

        .brain-2
          position: absolute
          width 110px
          height 140px
          top 101px
          left 19px
          border-bottom 25px solid transparent
          border-left 25px solid blackBorder
          border-top 25px solid transparent
          border-right 25px solid transparent
          border-radius 50%

      .hair
        position absolute
        top -180px

        .hair-0
          position: absolute
          top 40px
          width 420px
          height 160px
          background-color greenSkin
          z-index -100
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
            left 107px
            width 40px
            height 25px
            background-color greenSkin
            transform rotate(-5deg)

        .hair-2
          position absolute
          width 180px
          height 230px
          top -60px
          left 130px
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

</style>
