<template>
  <footer class="sticky">
    <div class="content">
      <ul class="list">
        <li>By <strong>Jorge Baumann</strong> </li>
        <li><a href="https://github.com/baumannzone/zombie-css" target="_blank">Github</a></li>
        <li><a href="https://twitter.com/baumannzone" target="_blank">Twitter</a></li>
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

</style>
