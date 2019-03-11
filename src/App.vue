<template>
  <div>
    <router-view/>
    <Footer v-show="$route.meta.isShow"/>
  </div>
</template>

<script>
  import Footer from './components/Footer/Footer.vue'
export default {
  components:{
    Footer
  }
}
</script>

<style>

</style>
