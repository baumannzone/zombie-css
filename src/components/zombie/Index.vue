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
    margin-top 100px
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
          top -130px
          left -70px
          position absolute
          width 300px
          height 300px
          background blackBorder
          border-radius 150px

        .hair-1
          top -150px
          left 110px
          position absolute
          width 200px
          height 200px
          background blackBorder
          border-radius 150px

        .hair-2
          position: absolute
          top: -70px
          left: -19px
          width: 250px
          height: 240px
          background-color: #b4e900
          border-radius: 120px

          &:after
            content: ''
            position: absolute
            width: 80px
            height: 35px
            background: #b4e900
            bottom: 0
            left: 44px

        .hair-3
          position: absolute
          top: -50px
          left: 225px
          width: 65px
          height: 110px
          background-color: #b4e900
          border-radius: 120px
          transform: skew(-20deg)

</style>
