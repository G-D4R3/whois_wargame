<template>
    <v-app v-bind:style="{'width':'100%', 'height':'100%', 'background-image': 'url(' + require('@/assets/background.png') + ')'}">
        <v-container fluid>
            <v-layout align-start justify-start>
                <router-link :to="{ name: 'main' }">
                    <v-btn text :style="{'color':'white', 'marginTop': '10px','marginLeft': '10px','width': '100px', 'height': '50px',}">Home</v-btn>
                </router-link>
                <router-link :to="{ name: 'challenges' }">
                    <v-btn text :style="{'color':'white', 'marginTop': '10px', 'marginLeft': '10px','width': '100px', 'height': '50px',}">Challenges</v-btn>
                </router-link>
                <router-link :to="{ name: 'scoreboard' }">
                    <v-btn text :style="{'color':'white', 'marginTop': '10px', 'marginLeft': '10px','width': '120px', 'height': '50px',}">Scoreboard</v-btn>
                </router-link>
            </v-layout>
            <v-layout justify-center>
                <h1 :style="{'marginTop': '30px', 'color': 'white'}">Join</h1>
            </v-layout>

        </v-container>
    </v-app>
</template>

<script>
    export default{
        data:() => ({
            form: {
                id: '',
                pw: '',
                name: '',
            },
            signin :{
                width: '100px',
                height: '50px',
                marginTop: '10px',
                marginRight: '10px',
                color: 'white',
            },
            container: {
                backgroundColor: 'white',
                margin: '50px',
            },
        }),
    }
</script>