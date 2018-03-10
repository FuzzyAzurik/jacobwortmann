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
                            <v-icon>fab fa-github</v-icon>
                            <v-icon>fab fa-facebook</v-icon>
                            <v-icon>fab fa-linkedin</v-icon>
                        </v-flex>
                    </v-card-text>
                </v-card>
            </v-flex>
            <v-flex d-flex md12 lg7>
                <v-card>
                    <v-card-title>
                        <v-icon class="icon-header" small>fas fa-user</v-icon>
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
                    <v-card-text>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt error eum ipsa
                        repellendus. Accusamus aliquid, animi assumenda consectetur consequuntur, deserunt
                        facilis fugiat illo impedit iure mollitia rerum tempore, veniam voluptatem!
                    </v-card-text>
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
                                            {{item.header}}:
                                        </v-card>
                                    </v-flex>
                                    <v-flex xs9 d-flex>
                                        <v-card flat>
                                            {{item.value}}
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
                    <v-card-text> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad asperiores at
                        commodi, dignissimos dolore eveniet exercitationem expedita hic inventore iste laborum
                        laudantium libero nobis non, nulla quae quaerat, sint vitae!
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
                    header: "Name",
                    value: "Jacob Frøkjær Wortmann"
                },
                {
                    header: "Age",
                    value: "28"
                },
                {
                    header: "Position",
                    value: "Software Engineer"
                },
                {
                    header: "Nationality",
                    value: "Danish"
                },
                {
                    header: "Location",
                    value: "Aalborg, Denmark"
                },
                {
                    header: "E-mail",
                    value: "jacob@wortmann.dk"
                }
            ],
            pageTitle: "Profile"
        })
    }
</script>
<style>
    .icon-header {
        margin-right: 0.5em;
    }
</style>
