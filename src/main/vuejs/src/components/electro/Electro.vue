<template>
    <v-container fluid grid-list-xl>
        <v-layout row wrap>
            <v-flex d-flex md12 tag="h3" class="headline">Power usage</v-flex>
            <v-flex d-flex md12>
                <v-layout column>
                    <v-flex md12 d-flex>
                        <v-card flat>
                            <v-card-text>
                                Below is a chart showing the power usage of the our house.
                            </v-card-text>
                        </v-card>
                    </v-flex>
                    <v-flex d-flex md12>
                        <v-card class="chart-container" flat>
                            <line-chart :chart-data="dataCollection"></line-chart>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>
    </v-container>
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
                dataCollection: null,
                numberOfItems: 100
            };
        },
        mounted() {
            this.requestData(this.numberOfItems);

            setInterval(function () {
                console.log("calling endpoint");
                this.requestData(this.numberOfItems)
            }.bind(this), 60000);
        },

        methods: {
            requestData(numberOfItems) {
                axios.get(`http://jacobwortmann.dk/electro-api/api/kwhSpans?limit=${numberOfItems}&span=${300}`)
                    .then(response => {
                        console.log(response);
                        this.dataCollection = {
                            labels: response.data.map(timeSpan => timeSpan.spanStart),
                            datasets: [{
                                label: 'kwh per minute',
                                backgroundColor: '#f87979',
                                pointRadius: 2.5,
                                pointHoverRadius: 5,
                                spanGabs: true,
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
        height:40vh;
        width:80vw;
    }
</style>
