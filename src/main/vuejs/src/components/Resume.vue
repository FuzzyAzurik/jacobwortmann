<template>
    <v-container fluid grid-list-xl>
        <v-layout row wrap>
            <v-flex d-flex xs12 md6>
                <v-card flat>
                    <v-card-title class="headline">Experience</v-card-title>
                    <v-divider/>
                    <v-card-text>
                        <timeline>
                            <template v-for="(step, index) in expSteps">
                                <timeline-item class="flex d-flex xs12">
                                    <v-container fluid grid-list-lg>
                                        <v-layout row>
                                            <v-flex xs9>
                                                <div class="headline">
                                                    {{step.title}}
                                                </div>
                                                <div>
                                                    {{step.content}}
                                                </div>
                                            </v-flex>
                                            <v-flex xs3>
                                                <div class="subheader">
                                                    {{step.from}} - {{step.to}}
                                                </div>
                                            </v-flex>
                                        </v-layout>
                                    </v-container>
                                </timeline-item>
                            </template>
                        </timeline>
                    </v-card-text>
                </v-card>
            </v-flex>
            <v-flex d-flex xs12 md6>
                <v-card flat>
                    <v-card-title class="headline">
                        Education
                    </v-card-title>
                    <v-divider/>
                    <v-card-text>
                        <timeline>
                            <template v-for="(step, index) in eduSteps">
                                <timeline-item class="flex d-flex xs12">
                                    <v-container fluid grid-list-lg>
                                        <v-layout row>
                                            <v-flex xs9>
                                                <div class="headline">
                                                    {{step.title}}
                                                </div>
                                                <div>
                                                    {{step.content}}
                                                </div>
                                            </v-flex>
                                            <v-flex xs3>
                                                <div class="subheader">
                                                    {{step.from}} - {{step.to}}
                                                </div>
                                            </v-flex>
                                        </v-layout>
                                    </v-container>
                                </timeline-item>
                            </template>
                        </timeline>
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import {Timeline, TimelineItem, TimelineTitle} from 'vue-cute-timeline'

    export default {
        components: {
            Timeline,
            TimelineItem,
        },

        data() {
            return {
                expSteps: [
                    {
                        title: "Spar Nord Bank A/S",
                        content: "Java EE developer, I mainly focused on creating solutions for internal use.",
                        from: "2015",
                        to: "?"
                    },
                    {
                        title: "Innowell",
                        content: "Web-developer, primarily working in PHP and JavaScript.",
                        from: "2014",
                        to: "2015"
                    },
                    {
                        title: "Saab Danmark A/S",
                        content: "Student helper, worked in supply chain and did some VBA programming for ",
                        from: "2009",
                        to: "2010"
                    }
                ],
                eduSteps: [
                    {
                        title: "Cand.polyt, Software Engineering",
                        content: "Graduated from Aalborg University",
                        from: "2013",
                        to: "2015"
                    },
                    {
                        title: "Bachelor in Software Engineering",
                        content: "Graduated from Aalborg Univerity",
                        from: "2010",
                        to: "2014"
                    }
                ]
            }
        }
    }
</script>

<style>
    .timeline-item * {
        padding-top: 0 !important;
    }

    .timeline-title * {
        padding-top: 0 !important;
    }

    .timeline {
        font-family: inherit;
        color: inherit !important;

    }

    .timeline-item {
        border-bottom: none;
    }
</style>
