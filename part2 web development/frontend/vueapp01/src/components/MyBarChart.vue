<script>
import { Bar, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins

export default Bar.extend({
  mixins: [reactiveProp],
  props: ['options'],
  mounted () {
    // this.chartData is created in the mixin.
    // If you want to pass options please create a local options object
    this.renderChart(this.chartData, this.options)
  }
})
/*
import {Bar} from 'vue-chartjs'

// Exporting this so it can be used in other components
export default Bar.extend({
  data () {
    return {
      datacollection: {
      // Data to be represented on x-axis
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
          {
            label: 'Detected Cardiac Arrest Calls',
            backgroundColor: '#234175',
            pointBackgroundColor: 'white',
            borderWidth: 1,
            pointBorderColor: '#234175',
            // Data to be represented on y-axis
            data: [40, 20, 30, 50, 90, 10, 20, 40, 50, 70, 90, 100]
          }
        ]
      },
      // Chart.js options that controls the appearance of the chart
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            },
            gridLines: {
              display: true
            }
          }],
          xAxes: [ {
            gridLines: {
              display: false
            }
          }]
        },
        legend: {
          display: true
        },
        responsive: true,
        maintainAspectRatio: false
      }
    }
  },
  mounted () {
  // renderChart function renders the chart with the datacollection and options object.
    this.renderChart(this.datacollection, this.options)
  }
})
*/
</script>