<template>
  <footer class="sticky">
    <div class="content">
      <ul class="list">
        <li>By Jorge Baumann</li>
        <li><a class="social-gh" href="https://github.com/baumannzone/zombie-css" target="_blank">Github</a></li>
        <li><a class="social-tw" href="https://twitter.com/baumannzone" target="_blank">Twitter</a></li>
        <li><a class="social-yt" href="https://twitter.com/baumannzone" target="_blank">Youtube</a></li>
        <!--<li>Youtube</li>-->
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

      &:before,
      &:after
        content '·'

      li
        display inline-block
        margin 0 10px

        a
          font-weight bold

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

</style>
