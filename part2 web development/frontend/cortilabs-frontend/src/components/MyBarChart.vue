<script>
      import {Bar, mixins} from 'vue-chartjs'
      const { reactiveProp } = mixins
      export default Bar.extend({ // Extending the base chart class
        mixins: [reactiveProp],
        data () {
          return {
            options: { // Chart.js options
              scales: {
                yAxes: [{
                  ticks: {
                    beginAtZero: true,
                    callback: function (value) { if (value % 1 === 0) { return value } }
                  },
                  gridLines: {
                    display: true
                  }
                }],
                xAxes: [ {
                  gridLines: {
                    display: true
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
          // this.chartData is created in the mixin
          this.renderChart(this.chartData, this.options)
        }
      })
    </script>