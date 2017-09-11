<template>
  <div class="col-md-2 header-element">
    <div class="row header-element-value">1</div>
    <div class="row header-element-label">Device Deployed</div>
  </div>
</template>

<script>
export default {
  name: 'header-element',
  props: ['element-value', 'element-label']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .header-element{
    text-align: center;
  }

  .header-element-value{
    font-size: 1.0em;
    margin-top: 10px;
  }
  .header-element-label{
    font-size: 0.7em;
    color:#7c7c7c;
    margin-top:5px;
  }
</style>