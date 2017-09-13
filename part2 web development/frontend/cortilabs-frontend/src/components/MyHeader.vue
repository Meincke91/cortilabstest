<template>
    <div class="my-header row header_container box-shadowed col-md-12">
      <logo-element></logo-element>

      <header-element :myvalue="this.device[0].deviceId" mylabel="Device Deployed"></header-element>
      <header-element :myvalue="this.diffDaysToNow(this.device[0].createdAt)" mylabel="Days since start"></header-element>
      <header-element :myvalue="this.getNumberOfCalls(this.calls)" mylabel="Calls since start"></header-element>
      <header-element :myvalue="this.getNumberOfCaCalls(this.calls)" mylabel="CA calls detected since start"></header-element>
      <header-element :myvalue="this.getAveragePredictionTime(this.calls)" mylabel="Avg. time to detection"></header-element>
    </div>  
</template>

<script>
import moment from 'moment'
import LogoElement from '@/components/LogoElement'
import HeaderElement from '@/components/HeaderElement'

export default {
  name: 'my-header',
  props: ['calls', 'device'],
  components: {
    LogoElement,
    HeaderElement
  },
  methods: {
    /**
    * Finds number of elements
    * @param {Object} calls
    * @return {Number} length of array
    **/
    getNumberOfCalls (calls) {
      return calls.length
    },
    /**
    * Amount of days between unixtime and now
    * @param {Number} unixTime
    * @return {Number} amount of days
    **/
    diffDaysToNow (unixTime) {
      var now = moment()
      var start = moment(unixTime, 'X')
      return now.diff(start, 'days')
    },
    /**
    * Filter ca calls from calls
    * @param {Array} calls
    * @return {Array} caCalls
    **/
    getNumberOfCaCalls (calls) {
      var caCalls = 0
      for (var i = 0; i < calls.length; i++) {
        if (calls[i].ca === 1) {
          caCalls++
        }
      }
      return caCalls
    },
    /**
    * Calculate average prediction time from calls
    * @param {Array} calls
    * @return {Number} average prediction time
    **/
    getAveragePredictionTime (calls) {
      var totalTime = 0
      for (var i = 0; i < calls.length; i++) {
        totalTime += calls[i].predictionTime
      }
      return parseInt(totalTime / calls.length) + ' sec'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header_container{
  padding:8px 0px 8px 0px;
  height:auto;
  background-color: #ffffff;
  width: 95%;
  float:none;
  margin:auto;
  margin-top:30px;
  border-radius: 3px;
}
</style>