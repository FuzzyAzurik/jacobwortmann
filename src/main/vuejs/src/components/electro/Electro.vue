<template>
    <v-container id="grid" tag="section" fluid grid-list-sm>
        <v-layout row wrap>
            <v-flex tag="h3" class="headline">Power usage</v-flex>
            <v-flex d-flex xs12 order-xs5>
                <v-layout column>
                    <v-flex>
                        <v-card flat>
                            <v-card-text>
                                Below is a chart showing the power usage of the our house.
                            </v-card-text>
                        </v-card>
                    </v-flex>
                    <v-flex>
                        <v-card flat>
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
    canvas {
        position: relative !important;
        width: 90vw !important;
        height: 60vh !important;
    }
</style>
