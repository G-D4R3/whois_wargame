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
                <v-btn v-if="$store.state.issigned=='sign in'" text @click="$router.push({name: 'join'})" v-bind:style="signin" align-right>join</v-btn>
                <v-btn v-if="$store.state.issigned=='sign in'" text @click.prevent="openModal" v-bind:style="signin" align-right>sign in</v-btn>
                <v-menu v-if="$store.state.issigned!='sign in'" offset-y>
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn text :style="signin"
                               v-bind="attrs"
                               v-on="on">{{$store.state.issigned}}</v-btn>
                    </template>
                    <v-list>
                        <v-list-item class="a" v-for="item in $store.state.userMenuItems" :key="item" @click="menuOption(item.action)">
                            <v-list-item-title>{{ item.title }}</v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>
                <Login @close="closeModal" v-if="modal"></Login>
            </v-layout>
            <v-layout align-center justify-center>
                <h1 :style="title">Scoreboard</h1>
            </v-layout>
            <v-layout align-center justify-center>
                <vue-good-table v-bind:columns="columns" v-bind:rows="this.score" v-bind:line-numbers="true"
                                :sort-options="{enabled: false,}"
                                :style="{'width': '1000px'}" theme="nocturnal">
                    <template slot="table-row" slot-scope="props">
                    <span v-if="props.column.field == 'name'">
                        <span :style="{'width': '200px', 'textAlgin': 'center'}">{{props.row.name}}</span>
                    </span>
                        <span v-else>{{props.formattedRow[props.column.field]}}</span>
                    </template>
                </vue-good-table>
            </v-layout>
        </v-container>
    </v-app>
</template>

<script>
    import Login from '../modals/Login'
    import axios from 'axios'

    export default {
        data: () =>({
            score: [],
            columns: [
                {
                    label: 'name',
                    field: 'name',
                    tdClass: 'text-center',
                    thClass: 'text-center'
                },
                {
                    label: 'score',
                    field: 'score',
                    tdClass: 'text-center',
                    thClass: 'text-center'
                },
            ],
            components: { Login },
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
                    height: '430px',
                    draggable: false,
                });
            },
            closeModal() {
                this.modal = false;
            },
            menuOption(opt){
                if(opt==="logout"){
                    axios.get("/api/logout");
                    this.$store.state.issigned="sign in";
                    location.reload();
                }
                if(opt==="mypage"){
                    this.$router.push({name: 'join'});
                }
            },
        },
        created() {
            axios.get("/api/score").then(response => { this.score = response.data; });
            axios.get("/api/login")
                .then((res)=>{
                    const user = res.data.user;
                    if(user) {
                        this.$store.state.issigned = user.name;
                    }
                })
                .catch((err)=>{
                    console.log(err);
                });
        },
        computed : {
            user() {return this.$state.getters.user;}
        },

    }
</script>
