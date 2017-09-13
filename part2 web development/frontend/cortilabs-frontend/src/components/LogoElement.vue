<template>
    <div class="col-md-2 logo-container">
      <span class="vertical-center"></span>
      <img class="header-logo" src="../assets/corti_logo.svg" alt="Cortilabs logo">
  </div>
</template>

<script>
export default {
  name: 'logo-element'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .logo-container{
    height:50px;
  }

  .vertical-center{
    display: inline-block;
    height: 100%;
    vertical-align: middle;
  }

  .header-logo{
    vertical-align: middle !important;
    max-height:13px;
    max-width: 100%;
  }
</style>