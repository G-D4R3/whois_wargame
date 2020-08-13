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
                            label: 'dare',
                            fontColor: 'white',
                            borderWidth: 2,
                            borderColor: '#f87979',
                            backgroundColor: '',
                            pointBorderColor: '#f87979',
                            data: [50, 250, 500, 800]
                        },
                        {
                            label: 'jy',
                            fontColor: 'white',
                            borderWidth: 2,
                            borderColor: 'white',
                            backgroundColor: '',
                            pointBorderColor: 'white',
                            data: [0, 50, 350, 900]
                        }
                    ]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true,
                                fontColor: 'white'
                            },
                            gridLines: {
                                display: true
                            }
                        }],
                        xAxes: [ {
                            ticks: {
                                fontColor: 'white'
                            },
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
            this.renderChart(this.datacollection, this.options)
        }
    }
</script>