<template>
  <div>
    <TheHeader @sidenavToggle = 'isShownSideNavi = !isShownSideNavi' />
    <TheSideNav 
      :show = 'isShownSideNavi'
      @close = 'isShownSideNavi = false'/>
    <nuxt/>
  </div>
</template>

<script>
import TheHeader from '~/components/Navigation/TheHeader.vue'
import TheSideNav from '~/components/Navigation/TheSideNav.vue'

export default {
    components: {
      TheHeader,
      TheSideNav
    },
    data() {
      return {
        isShownSideNavi: false
      }
    }
}
</script>


<style>
html
{
  font-family: 'Roboto', sans-serif;
}
body {
  margin: 0;
  padding: 0;
}

</style>
