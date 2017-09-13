<template>
  <div class="col-md-2 header-element">
    <div class="row header-element-value">{{ myvalue }}</div>
    <div class="row header-element-label">{{ mylabel }}</div>
  </div>
</template>

<script>
export default {
  name: 'header-element',
  props: ['myvalue', 'mylabel']
}
</script>

<style scoped>
  .header-element{
    height:50px;
    text-align: center;
  }

  .header-element-value{
    font-size: 1.0em;
    padding-top: 5px;
    font-weight: 500;
  }
  .header-element-label{
    font-size: 0.71em;
    color:#7c7c7c;
    padding-top:5px;
    font-weight: 500;
  }
</style>