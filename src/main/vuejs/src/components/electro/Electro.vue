<template>
    <div class="chart-container">
        <line-chart :chart-data="dataCollection"></line-chart>
    </div>
</template>

<script>
    import LineChart from '@/components/electro/LineChart';
    import axios from 'axios';

    export default {
        components: {
            LineChart
        },
        props: {},
        data() {
            return {
                dataCollection: null
            };
        },
        mounted() {
            this.requestData(200);

            setInterval(function () {
                console.log("calling endpoint");
                this.requestData(200)
            }.bind(this), 20000);
        },

        methods: {
            requestData(numberOfItems) {
                const meterId = 99806;

                axios.get(`https://jacobwortmann.dk:9443/electro-backend/api/meter/${meterId}/groupedReadings?limit=${numberOfItems}&group=60`)
                    .then(response => {
                        console.log(response);
                        this.dataCollection = {
                            labels: response.data.map(timeSpan => timeSpan.readingTime),
                            datasets: [{
                                label: 'kwh per minute',
                                backgroundColor: '#f87979',
                                data: response.data.map(timeSpan => timeSpan.kwhSum)
                            }]
                        };
                    })
                    .catch(err => {
                        console.log(err);
                    });
            }
        }
    }
</script>

<style>
    .chart-container {
        position: relative;
        height: 60vh;
        width: 80vw;
    }
</style>
