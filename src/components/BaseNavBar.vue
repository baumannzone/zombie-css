<template>
  <div id="nav">
    <router-link to="/🧟‍♂️">Home 🧟‍♂️</router-link>
    |
    <router-link to="/about">About</router-link>
  </div>
</template>

<script>
export default {
  name: 'BaseNavBar'
}
</script>

<style lang="stylus">
  #nav
    text-align center
    padding 20px
    a
      font-weight bold
      color #2c3e50
      &.router-link-exact-active
        color #42b983
</style>
