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
      /**
      * transform call objects to labels and values, and create datacollection for the chart
      * @param {Array} calls
      * @return {Object} datacollection
      **/
      fillData (calls) {
        var caCalls = this.getCaCalls(calls)
        var caCallsPerDay = this.getCaCallsPerDay(this.getCreatedAtAsArray(caCalls))
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
      /**
      * get creation time of calls as array
      * @param {Array} calls
      * @return {Array} createdAt
      **/
      getCreatedAtAsArray (calls) {
        var createdAt = []

        for (var i = 0; i < calls.length; i++) {
          if (calls[i].ca === 1) {
            var predictionTimeInUnix = calls[i].createdAt
            createdAt.push(predictionTimeInUnix)
          }
        }
        return createdAt
      },
      /**
      * Convert array of unixtimestamps to String of format 'YYYY-MM-DD'
      * @param {Array} unixtimestamps
      * @return {Array} dateStrings
      **/
      unixTimeToDate (unixTimestamps) {
        var dateStrings = []

        for (var i = 0; i < unixTimestamps.length; i++) {
          dateStrings.push(moment(unixTimestamps[i], 'X').format('YYYY-MM-DD'))
        }
        return dateStrings
      },
      /**
      * Filter ca calls from calls
      * @param {Array} calls
      * @return {Array} caCalls
      **/
      getCaCalls (calls) {
        var caCalls = []
        for (var i = 0; i < calls.length; i++) {
          if (calls[i].ca === 1) {
            caCalls.push(calls[i])
          }
        }
        return caCalls
      },
      /**
      * group calls by day
      * @param {Array} calls
      * @return {Array} array of labels and values
      **/
      getCaCallsPerDay (calls) {
        var a = []
        var b = []
        var prev
        var unixFloorDays = this.floorUnixToDays(calls)
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
      /**
      * round down the unix time to nearest day
      * @param {Array} unixTimestamps
      **/
      floorUnixToDays (unixTimestamps) {
        var floorUnix = []

        for (var i = 0; i < unixTimestamps.length; i++) {
          floorUnix.push(parseInt(moment(unixTimestamps[i], 'X').startOf('day').format('X')))
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