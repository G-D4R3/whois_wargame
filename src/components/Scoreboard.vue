<template>
    <v-app v-bind:style="{ 'background-image': 'url(' + require('@/assets/background.png') + ')'}">
        <v-container fluid>
            <v-layout align-start justify-end>
                <router-link :to="{ name: 'main' }">
                    <v-btn text :style="{'color':'white', 'marginTop': '10px','marginLeft': '10px','width': '100px', 'height': '50px',}">Home</v-btn>
                </router-link>
                <router-link :to="{ name: 'challenges' }">
                    <v-btn text :style="{'color':'white', 'marginTop': '10px', 'marginLeft': '10px','width': '100px', 'height': '50px',}">Challenges</v-btn>
                </router-link>
                <v-spacer></v-spacer>
                <v-btn text @click="openModal" v-bind:style="signin" align-right>sign in</v-btn>
                <Login @close="closeModal" v-if="modal"></Login>
            </v-layout>
            <v-layout align-center justify-center>
                <h1 :style="title">Scoreboard</h1>
            </v-layout>
            <ScoreChart :style="{'marginLeft': '40px', 'marginRight': '40px'}"></ScoreChart>
        </v-container>
    </v-app>
</template>

<script>
    import Login from './Login'
    import ScoreChart from './ScoreChart'

    export default {
        components: {ScoreChart},
        data: () =>({

            components: { Login, ScoreChart },
            title: {
                color: 'white',
                textAlgin: 'center',
                marginTop: '50px',
                marginBottom: '100px',
            },
            signin :{
                width: '100px',
                height: '50px',
                marginTop: '10px',
                marginRight: '10px',
                color: 'white',
            },
        }),
        methods : {
            openModal() {
                this.$modal.show(Login, {
                    hot_table: 'data',
                    modal: this.$modal
                }, {
                    name: 'dynamic-modal',
                    width: '400px',
                    height: '400px',
                    draggable: false,
                });
            },
            closeModal() {
                this.modal = false;
            },
        }
    }
</script>