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
      <v-layout justify-center> <!-- 나중에 v-for로 바꿔서 랜더링 -->
        <v-card :style='card' @click='openModal(1)'>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">Tuts</h3>
              <div>200pts</div>
            </div>
          </v-card-title>
        </v-card>
        <Problem v-if='modal'></Problem>
        <v-card :style='card'>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">problem2</h3>
              <div>100pts</div>
            </div>
          </v-card-title>
        </v-card>
        <v-card :style='card'>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">guessing </h3>
              <div>150pts</div>
            </div>
          </v-card-title>
        </v-card>
        <v-card :style='card'>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">crpyto2</h3>
              <div>150pts</div>
            </div>
          </v-card-title>
        </v-card>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
import Login from '../modals/Login';
import Problem from '../modals/Problem';
import axios from 'axios';

export default {
  components: { Login, Problem },

  data: () => ({
    problems: [],
    modal: false,
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
    card: {
      width: '230px',
      height: '150px',
      marginLeft: '20px',
      marginRight: '20px',
      marginTop: '30px',
      backgroundColor: '#676f82',
      color: 'white',
    }
  }),
  methods : {
    openModal(mo) {
      if(mo==1){
        this.$modal.show(Problem,{
          hot_table : 'data',
          modal : this.$modal },{
          name: 'dynamic-modal',
          width : '400px',
          draggable: false,
        });
      }
      if(mo==0){
        this.$modal.show(Login,{
          hot_table : 'data',
          modal : this.$modal },{
          name: 'dynamic-modal',
          width : '400px',
          height : '430px',
          draggable: false,
        });
      }
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
