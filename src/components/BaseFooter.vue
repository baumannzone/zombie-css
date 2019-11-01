<template>
  <footer class="sticky">
    <div class="content">
      <ul class="list">
        <li>
          <small>
            <i class="fas fa-code"></i>
            with 💙 by <a href="https://twitter.com/baumannzone">Jorge Baumann</a>
          </small>
        </li>

        <li class="social">
          <a class="social-gh" href="https://github.com/baumannzone/zombie-css" target="_blank">
            <i class="fab fa-github"></i>
          </a>
        </li>

        <li class="social">
          <a class="social-tw" href="https://twitter.com/baumannzone" target="_blank">
            <i class="fab fa-twitter"></i>
          </a>
        </li>

        <li class="social">
          <a class="social-yt" href="https://youtu.be/q0_IOxh-V4s" target="_blank">
            <i class="fab fa-youtube"></i>
          </a>
        </li>

        <li class="social">
          <a class="social-dev" href="https://dev.to/baumannzone">
            <i class="fab fa-dev" title="baumannzone's DEV Profile"></i>
          </a>
        </li>

      </ul>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'BaseFooter'
}
</script>

<style lang="stylus">
  color-gh = #242a2e
  color-tw = #1da1f2
  color-yt = #d8111d
  color-dev = #0A0A0A

  footer.sticky
    position fixed
    display block
    width 100%
    bottom 0
    padding 10px
    margin-top 100px
    text-align center
    background-color #fafafa
    z-index -1

    ul.list
      list-style none
      padding 0

      li
        display inline-block
        margin 0 10px

        &:first-of-type a
          color #0e95ff
          margin-right 15px
          &:hover
            color darken(#0e95ff, 10)

        &.social a
          font-size 25px

          &.social-gh
            color color-gh

            &:hover
              color darken(color-gh, 10)

          &.social-tw
            color color-tw

            &:hover
              color darken(color-tw, 10)

          &.social-yt
            color color-yt

            &:hover
              color darken(color-yt, 10)

          &.social-dev
            color color-dev

            &:hover
              color lighten(color-dev, 10)

</style>
