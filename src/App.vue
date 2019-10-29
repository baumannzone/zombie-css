<template>
  <div id="app">
    <BaseNavBar/>
    <router-view/>
    <BaseFooter />
  </div>
</template>

<script>
import BaseNavBar from './components/BaseNavBar'
import BaseFooter from './components/BaseFooter'

export default {
  components: { BaseFooter, BaseNavBar }
}
</script>
