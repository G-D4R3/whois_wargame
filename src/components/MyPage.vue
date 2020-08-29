<template>
    <v-app v-bind:style="{'width':'100%', 'height':'100%', 'background-image': 'url(' + require('@/assets/background.png') + ')'}">
        <v-container fluid>
            <v-layout align-start justify-start>
                <v-btn @click="$router.push('/')" text :style="{'color':'white', 'marginTop': '10px', 'marginLeft': '10px','width': '100px', 'height': '50px',}">Home</v-btn>
                <v-btn @click="$router.push('/challenges')" text :style="{'color':'white', 'marginTop': '10px', 'marginLeft': '10px','width': '120px', 'height': '50px',}">Challenges</v-btn>
                 <v-btn @click="$router.push('/scoreboard')" text :style="{'color':'white', 'marginTop': '10px', 'marginLeft': '10px','width': '120px', 'height': '50px',}">Scoreboard</v-btn>
            </v-layout>
            <v-layout justify-center>
                <h1 :style="{'color': 'white', 'marginTop': '30px'}">My Page</h1>
            </v-layout>
            <v-layout column justify-center align-center :style="container">
                <h4 :style="{'marginTop': '30px'}">{{ $store.state.username }}(800p)</h4>
                <v-flex>
                    <MyScoreChart :style="chart"></MyScoreChart>
                </v-flex>
            </v-layout>
        </v-container>
    </v-app>
</template>


<script>

    import MyScoreChart from "./MyScoreChart";
    export default {
        components: { MyScoreChart },
        data: () => ({
            container: {
                backgroundColor: 'white',
                margin: '50px',
            },
            chart: {
                marginTop: '30px',
                width: '700px',
                height: '400px',
                marginBottom: '30px'
            }
        }),
    }
</script>