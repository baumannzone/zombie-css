<template>
  <div class="face-content">
    <div class="ears">
      <div class="ear-left"></div>
      <div class="ear-space">
        <div class="eyes">
          <div class="eye-left-wrapper">
            <div class="eye">
              <div class="decorator decorator-1"></div>
              <div class="decorator decorator-2"></div>
            </div>
          </div>
          <div class="eye-right-wrapper">
            <div class="eye"></div>
          </div>
        </div>
      </div>
      <div class="ear-right"></div>
    </div>
    <div class="nose-wrapper"></div>
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
        position relative
        content ''
        display block
        width 90px
        height 120px
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

        &:after
          content ''
          display block
          position absolute
          background-color greenSkin
          width 50px
          height 50px
          z-index -1

      .ear-left
        border-left 25px solid blackBorder
        border-right 25px solid transparent
        z-index 1

        &:before
          left 32px
          top -19px
          transform skew(5deg)

        &:after
          top 0
          left 40px

      .ear-right
        border-left 25px solid transparent
        border-right 25px solid blackBorder

        &:before
          right 18px
          top -19px
          transform skew(-5deg)

        &:after
          top 0
          right 40px

      // === EAR SPACE ===
      // =================
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

        // === EYES 👀 ===
        // ===============
        .eyes
          display flex
          justify-content space-evenly
          margin-top -70px

          .eye-left-wrapper,
          .eye-right-wrapper
            z-index 1
            border 25px solid blackBorder
            background-color blackBorder
            position relative
            display block
            width 150px
            height 150px

          .eye-left-wrapper
            border-radius 50% 50% 50% 20%

            .eye
              position relative
              top 70px
              left 10px
              width 100%
              height 100%
              background-color whiteEye
              border-radius 50%
              box-shadow 0 0 0 20px blackBorder

              &:before
                position absolute
                content ''
                display block
                width 0
                height 0
                top: calc(50% - 25px)
                left: calc(50% - 25px)
                border-radius 50%
                border 25px solid blackBorder

              .decorator
                display inline-block
                position relative
                background-color whiteEye
                &.decorator-1
                  width 25px
                  height 60px
                  top -30px
                  left 10px
                  box-shadow 35px -20px 0 whiteEye

                  &:before
                    content ''
                    position absolute
                    width 25px
                    height 25px
                    background-color whiteEye
                    top -10px
                    border-radius 50%
                    box-shadow 35px -20px 0 whiteEye

          .eye-right-wrapper
            border-radius 50% 20% 50% 50%

            .eye
              position relative
              width 100%
              height 100%
              background-color whiteEye
              border-radius 50%

              &:before
                position absolute
                content ''
                display block
                width 0
                height 0
                top: calc(50% - 25px)
                left: calc(50% - 25px)
                border-radius 50%
                border 25px solid blackBorder

    .nose-wrapper
      position relative
      display block
      top -16px
      width 100%
      height 100px
      background-color greenSkin
      border-left 25px solid blackBorder
      border-right 25px solid blackBorder

      &:before,
      &:after
        content ''
        display block
        width 20px
        height 20px
        position absolute
        background-color greenSkin

      &:before
        top -10px
        left -5px
        transform rotate(45deg)
      &:after
        top -12px
        right -8px
        transform rotate(45deg)
</style>
