<template>
  <div class="my-graph-container box-shadowed">
    <my-bar-chart :height="600" :chart-data="datacollection"></my-bar-chart>
  </div>
</template>

<script>
  import MyBarChart from '@/components/MyBarChart'
  import moment from 'moment'

  export default {
    name: 'my-graph-container',
    props: ['calls'],
    components: {
      MyBarChart
    },
    data () {
      return {
        datacollection: null
      }
    },
    created () {
      this.fillData()

      setInterval(function () {
        this.fillData()
      }.bind(this), 10000)
    },
    methods: {
      fillData () {
        this.caCalls = this.getCaCalls(this.calls)
        this.caCallsPerDay = this.getCaCallsPerDay(this.getDayValues(this.caCalls))
        this.dateStrings = this.unixTimeToDate(this.caCallsPerDay[0])
        this.datacollection = {
          labels: this.dateStrings,
          datasets: [
            {
              label: 'Detected Cardiac Arrest Calls',
              backgroundColor: '#234175',
              pointBackgroundColor: 'white',
              borderWidth: 1,
              pointBorderColor: '#234175',
              data: this.caCallsPerDay[1]
            }
          ]
        }
      },
      getDayValues (calls) {
        var days = []

        for (var i = 0; i < calls.length; i++) {
          if (calls[i].ca === 1) {
            var predictionTimeInUnix = calls[i].createdAt
            days.push(predictionTimeInUnix)
          }
        }
        return days
      },
      unixTimeToDate (days) {
        var dateStrings = []

        for (var i = 0; i < days.length; i++) {
          dateStrings.push(moment(days[i], 'X').format('YYYY-MM-DD'))
        }
        return dateStrings
      },
      getCaCalls (calls) {
        var caCalls = []
        for (var i = 0; i < calls.length; i++) {
          if (calls[i].ca === 1) {
            caCalls.push(calls[i])
          }
        }
        return caCalls
      },
      getCaCallsPerDay (caCalls) {
        var a = []
        var b = []
        var prev

        caCalls.sort()
        for (var i = 0; i < caCalls.length; i++) {
          if (caCalls[i] !== prev) {
            a.push(caCalls[i])
            b.push(1)
          } else {
            b[b.length - 1]++
          }
          prev = caCalls[i]
        }

        return [a, b]
      }
    }
  }
</script>

<style>
  .my-graph-container{
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