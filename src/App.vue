<template>
 
  <router-view />
</template>

<script>
export default {
  mounted(){
    this.$store.commit('initialiseStore')
  }
}
</script>


<style lang="scss" scoped>

</style>