<template>
    <div class="small">
        <line-chart :chart-data="datacollection"></line-chart>
    </div>
</template>

<script>
    import {Line} from 'vue-chartjs'

    export default {
        extends: Line,
        props: ['data', 'options'],
        mounted() {
            this.renderChart(this.data, this.options)
        }
    }
</script>
