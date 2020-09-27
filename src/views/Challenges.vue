<template>
  <v-app v-bind:style="{'width':'100%', 'height':'100%', 'background-image': 'url(' + require('@/assets/background.png') + ')'}">
    <v-container fluid>
      <v-layout align-start justify-end>
        <img @click="$router.push('/')" src="@/assets/title2.png" :style="{'marginTop': '10px', 'marginLeft': '10px','width': '100px', 'height': '50px',}">
        <v-btn @click="$router.push('/scoreboard')" text :style="{'color':'white', 'marginTop': '10px', 'marginLeft': '30px','width': '100px', 'height': '50px',}">Scoreboard</v-btn>
        <v-spacer></v-spacer>
        <v-btn v-if="$store.state.issigned=='sign in'" text @click="$router.push({name: 'join'})" v-bind:style="signin" align-right>join</v-btn>
        <v-btn v-if="$store.state.issigned=='sign in'" text @click="openModal(0)" v-bind:style="signin" align-right>sign in</v-btn>
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
        <h1 :style="title">Challenges</h1>
      </v-layout>
    </v-container>
    <v-container fill-height>
      <v-layout justify-center>
        <div v-for="problem in problems" :key="problem.id">
          <v-card :style="solved" @click="openProblem(problem)">
            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">{{problem.name}}</h3>
                <div>{{problem.score}}</div>
              </div>
            </v-card-title>
          </v-card>
        </div>
      </v-layout>
    </v-container>
    <Problem v-if="problemModal" @close="problemModal = false" :pd="this.pd"></Problem>
  </v-app>
</template>

<script>
import Login from '../modals/Login';
import axios from 'axios';
import Problem from '@/modals/Problem'

export default {
  components: { Login, Problem },

  data: () => ({
    problems: [],
    pd: {
      name: 'hi',
      description: null,
      link: null,
    },
    modal: false,
    problemModal: false,

    signin :{
      width: '100px',
      height: '50px',
      marginTop: '10px',
      marginRight: '10px',
      marginLeft: '10px',
      color: 'white',
    },
    title: {
      color: 'white',
      textAlgin: 'center',
      marginTop: '100px',
      marginBottom: '100px',
    },
    unsolved: {
      width: '230px',
      height: '150px',
      marginLeft: '20px',
      marginRight: '20px',
      marginTop: '30px',
      backgroundColor: '#9ea5b6',
      color: 'white',
    },
    solved: {
      width: '230px',
      height: '150px',
      marginLeft: '20px',
      marginRight: '20px',
      marginTop: '30px',
      backgroundColor: '#676f82',
      color: 'white',
    },
    cardtitle: {
      color: 'white',
      fontSize: '20px',
      fontWeight: 'bold',
    }
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
    openProblem(item) {
      this.problemModal = true;
      this.pd = item;
    },
    closeModal() {
      this.modal = false;
    },
    menuOption(opt) {
      if (opt === "logout") {
        axios.get("/api/logout");
        this.$store.state.issigned = "sign in";
        location.reload();
      }
      if (opt === "mypage") {
        this.$router.push({name: 'join'});
      }
    },
  },
    created() {
    axios.get("/api/challenges").then(response => { this.problems = response.data; });
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

};
</script>
