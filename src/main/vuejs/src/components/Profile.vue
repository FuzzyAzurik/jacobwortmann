<template>
    <v-container fluid grid-list-xl>
        <v-layout row wrap>
            <v-flex d-flex md12 lg5 justify-center align-center text-xs-center>
                <v-card flat>
                    <v-avatar
                        :tile="false"
                        :size="150">
                        <img src="../assets/me.jpg" alt="Jacob Wortmann">
                    </v-avatar>
                    <v-card-text>
                        <h3>Jacob Frøkjær Wortmann</h3>
                        <h5>Software Engineer at Spar Nord A/S</h5>
                        <v-flex d-flex offset-xs4 xs4 justify-space-around>
                            <v-btn icon href="https://github.com/FuzzyAzurik/">
                                <v-icon>fab fa-github</v-icon>
                            </v-btn>
                            <v-btn icon href="https://www.facebook.com/jacob.wortmann">
                                <v-icon>fab fa-facebook</v-icon>
                            </v-btn>
                            <v-btn icon href="https://linkedin.com/in/jacob-frøkjær-wortmann">
                                <v-icon>fab fa-linkedin</v-icon>
                            </v-btn>
                        </v-flex>
                    </v-card-text>
                </v-card>
            </v-flex>
            <v-flex d-flex md12 lg7>
                <v-card>
                    <v-card-title>
                        <v-icon class="icon-header" small>far fa-user-circle</v-icon>
                        Profile
                    </v-card-title>
                    <v-divider/>
                    <v-card-text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci cum delectus ea
                        earum error ex facilis fugit hic ipsam laudantium molestiae nihil non provident similique
                        tenetur, ullam unde! At. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
                        beatae dignissimos facere iusto nemo nesciunt optio placeat porro possimus ratione, recusandae
                        rerum velit vitae? Consectetur dolorem itaque iure maxime tenetur!
                    </v-card-text>
                </v-card>
            </v-flex>
            <v-flex d-flex md12 lg4>
                <v-card flat>
                    <v-card-title justify-space-around>
                        <v-icon class="icon-header" small>fas fa-code</v-icon>
                        <span>Skills</span>
                    </v-card-title>
                    <v-divider/>
                    <v-list two-line dense>
                        <template v-for="(item) in skillsData">
                            <v-list-tile>
                                <v-list-tile-content>
                                    <v-list-tile-title>
                                        <v-layout row wrap>
                                            <v-flex xs9 d-flex>
                                                {{item.title}}
                                            </v-flex>
                                            <v-flex xs3 d-flex>
                                                {{item.value}}%
                                            </v-flex>
                                        </v-layout>
                                    </v-list-tile-title>
                                    <v-list-tile-sub-title>
                                        <v-progress-linear
                                            v-model="item.value"
                                            :buffer-value=100
                                        ></v-progress-linear>
                                    </v-list-tile-sub-title>
                                </v-list-tile-content>
                            </v-list-tile>
                        </template>
                    </v-list>
                </v-card>
            </v-flex>
            <v-flex d-flex md12 lg4>
                <v-card flat>
                    <v-card-title>
                        <v-icon class="icon-header" small>fas fa-info-circle</v-icon>
                        Information
                    </v-card-title>
                    <v-divider/>
                    <v-list dense>
                        <template v-for="(item, index) in informationData">
                            <v-list-tile>
                                <v-layout row wrap>
                                    <v-flex xs3 d-flex>
                                        <v-card flat>
                                            {{item.title}}:
                                        </v-card>
                                    </v-flex>
                                    <v-flex xs9 d-flex>
                                        <v-card flat>
                                            {{item.text}}
                                        </v-card>
                                    </v-flex>
                                </v-layout>
                            </v-list-tile>
                            <v-divider v-if="index + 1 < informationData.length" :key="`divider-${index}`"/>
                        </template>
                    </v-list>
                </v-card>
            </v-flex>
            <v-flex d-flex md12 lg4>
                <v-card flat>
                    <v-card-title>
                        <v-icon class="icon-header" small>fas fa-briefcase</v-icon>
                        Toolbox
                    </v-card-title>
                    <v-divider/>
                    <v-card-text>
                        Besides working with JavaEE(or now called Jakarta EE) I juggle with learning new frameworks, build tools, and general software development topics.
                        Below i have listed some of the topics:
                        <v-flex d-flex>
                            <ul>
                                <li>RESTful API</li>
                                <li>Git</li>
                                <li>Continues Delivery</li>
                                <li>Maven</li>
                                <li>VueJs</li>
                                <li>flyway</li>
                                <li>npm</li>
                                <li>webpack</li>
                            </ul>
                        </v-flex>
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
    export default {
        data: () => ({
            informationData: [
                {
                    title: "Name",
                    text: "Jacob Frøkjær Wortmann"
                },
                {
                    title: "Age",
                    text: "28"
                },
                {
                    title: "Position",
                    text: "Software Engineer"
                },
                {
                    title: "Nationality",
                    text: "Danish"
                },
                {
                    title: "Location",
                    text: "Aalborg, Denmark"
                },
                {
                    title: "E-mail",
                    text: "jacob@wortmann.dk"
                }
            ],
            skillsData: [
                {
                    title: "Java EE",
                    value: 90
                },
                {
                    title: "SQL",
                    value: 70
                },
                {
                    title: "JS(Vue/Vanilla)",
                    value: 60
                },
                {
                    title: "HTML5/CSS3",
                    value: 50
                }
            ]
        })
    }
</script>
<style>
    .icon-header {
        margin-right: 0.5em;
    }
</style>
