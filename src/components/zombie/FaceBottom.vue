<template>
  <div class="face-footer">
    <div class="wrapper">
      <div class="nose-container">
        <div class="nose"></div>
      </div>
      <div class="mouth-container">
        <div class="mouth">
          <div class="teeth">
            <div class="tooth tooth-1"></div>
            <div class="tooth tooth-2"></div>
            <div class="tooth tooth-3"></div>
          </div>
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
  blackBorder = #292c34
  yellowTooth = #faefaf

  .face-footer
    position relative
    margin-top -32px
    margin-bottom 200px
    .wrapper
      width 100%
      height 320px
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

          .teeth
            display flex
            justify-content center
            padding-top 15px

            .tooth
              position relative
              background-color yellowTooth
              margin 3px

              &.tooth-1
                width 30px
                height 23px
                &:after
                  position absolute
                  content ''
                  display block
                  bottom -9px
                  border-top 4px solid yellowTooth
                  border-left 8px solid yellowTooth
                  border-bottom 5px solid transparent
                  border-right 15px solid transparent

              &.tooth-2
                width 34px
                height 32px
                &:after
                  position absolute
                  content ''
                  display block
                  bottom 0
                  left 6px
                  border-top 1px solid transparent
                  border-left 7px solid transparent
                  border-bottom 12px solid blackBorder
                  border-right 10px solid transparent

              &.tooth-3
                width 29px
                height 23px
                &:after
                  position absolute
                  content ''
                  display block
                  right -14px
                  top 0
                  border-top 23px solid transparent
                  border-left 5px solid yellowTooth
                  border-bottom 0 solid transparent
                  border-right 10px solid transparent

</style>
