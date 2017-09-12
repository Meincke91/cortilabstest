<template>
  <div class="home">
      <my-header :calls="this.calls" :device="this.device"></my-header>
      <my-graph-container :calls="this.calls"></my-graph-container>
  </div>
</template>

<script>
import MyHeader from '@/components/MyHeader'
import MyGraphContainer from '@/components/MyGraphContainer'
import axios from 'axios'

export default {
  name: 'home',
  components: {
    MyHeader,
    MyGraphContainer
  },
  data () {
    return {
      device: [{ 'deviceId': 0, 'createdAt': 0 }],
      calls: [{ 'ca': 0, 'createdAt': 0, 'predictionTime': 0 }]
    }
  },
  methods: {
    fetchData: function () {
      axios.get(`http://127.0.0.1:3000/calls`, { params: {deviceId: 1} })
      .then(response => {
        // JSON responses are automatically parsed.
        this.calls = response.data
      })
      .catch(e => {
        this.errors.push(e)
      })

      axios.get(`http://127.0.0.1:3000/device`, { params: {deviceId: 1} })
      .then(response => {
        // JSON responses are automatically parsed.
        this.device = response.data
      })
      .catch(e => {
        this.errors.push(e)
      })
    }
  },
  mounted: function () {
    this.fetchData()

    setInterval(function () {
      this.fetchData()
    }.bind(this), 10000)
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
