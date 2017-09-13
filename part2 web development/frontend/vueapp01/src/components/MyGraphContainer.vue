<template>
  <div class="my-graph-container box-shadowed">
    <my-bar-chart :height="600" :chart-data="fillData(calls)"></my-bar-chart>
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
    methods: {
      fillData (calls) {
        var caCalls = this.getCaCalls(calls)
        var caCallsPerDay = this.getCaCallsPerDay(this.getDayValues(caCalls))
        var dateStrings = this.unixTimeToDate(caCallsPerDay[0])
        var datacollection = {
          labels: dateStrings,
          datasets: [
            {
              label: 'Detected Cardiac Arrest Calls',
              backgroundColor: '#234175',
              pointBackgroundColor: 'white',
              borderWidth: 1,
              pointBorderColor: '#234175',
              data: caCallsPerDay[1]
            }
          ]
        }
        return datacollection
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
        var unixFloorDays = this.floorUnixToDays(caCalls)
        unixFloorDays.sort()
        for (var i = 0; i < unixFloorDays.length; i++) {
          if (unixFloorDays[i] !== prev) {
            a.push(unixFloorDays[i])
            b.push(1)
          } else {
            b[b.length - 1]++
          }
          prev = unixFloorDays[i]
        }
        return [a, b]
      },
      floorUnixToDays (unixTimes) {
        var floorUnix = []

        for (var i = 0; i < unixTimes.length; i++) {
          floorUnix.push(parseInt(moment(unixTimes[i], 'X').startOf('day').format('X')))
        }
        return floorUnix
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