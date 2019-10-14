<template>
  <div id="app">
    <BaseNavBar/>
    <router-view/>
  </div>
</template>
<script>
import BaseNavBar from './components/BaseNavBar'

export default {
  components: { BaseNavBar }
}
</script>
