<script>
    import { Line } from 'vue-chartjs'

    export default {
        extends: Line,
        data () {
            return {
                datacollection: {
                    labels: ['2020-08-04','2020-08-05', '2020-08-06', '2020-08-07'],
                    datasets: [
                        {
                            fontColor: 'white',
                            borderWidth: 2,
                            borderColor: '#f87979',
                            backgroundColor: '',
                            pointBorderColor: '#f87979',
                            data: [50, 250, 500, 800]
                        },
                    ]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true,
                                fontColor: 'black'
                            },
                            gridLines: {
                                display: true
                            }
                        }],
                        xAxes: [ {
                            ticks: {
                                fontColor: 'black'
                            },
                            gridLines: {
                                display: false
                            }
                        }]
                    },
                    legend: {
                        display: false
                    },
                    responsive: true,
                    maintainAspectRatio: false
                }
            }
        },
        mounted () {
            this.renderChart(this.datacollection, this.options)
        }
    }
</script>