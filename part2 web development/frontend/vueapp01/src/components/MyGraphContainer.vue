<template>
  <div class="my-graph-containr box-shadowed">
    <my-bar-chart :height="600"></my-bar-chart>
  </div>  
</template>

<script>
import MyBarChart from '@/components/MyBarChart'

export default {
  name: 'my-graph-containr',
  components: {
    MyBarChart
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.my-graph-containr{
  height:auto;
  background-color: #ffffff;
  width: 95%;
  float:none;
  margin:auto;
  margin-top:30px;
  border-radius: 3px;
  padding:10px;
}
</style>