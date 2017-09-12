<template>
  <div class="home">
      <my-header></my-header>
      <my-graph-container></my-graph-container>
      <my-data-fetcher></my-data-fetcher>
  </div>
</template>

<script>
import MyHeader from '@/components/MyHeader'
import MyGraphContainer from '@/components/MyGraphContainer'
import MyDataFetcher from '@/components/MyDataFetcher'

export default {
  name: 'home',
  components: {
    MyHeader,
    MyGraphContainer,
    MyDataFetcher
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
