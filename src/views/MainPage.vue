<template>
  <v-app v-bind:style="{'width':'100%', 'height':'100%', 'background-image': 'url(' + require('@/assets/background.png') + ')'}">
    <v-layout align-end justify-end>
      <p @click="$router.push('/mypage')" :style="{'color' : 'white'}">{{ $store.state.username }}</p>
      <v-btn v-if="$store.state.issigned=='sign in'" text @click="$router.push({name: 'join'})" v-bind:style="signin" align-right>join</v-btn>
      <v-btn v-if="$store.state.issigned=='sign in'" text @click="openModal" v-bind:style="signin" align-right>sign in</v-btn>
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
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex>
          <img src="@/assets/title.png">
        </v-flex>
        <v-flex>
          <h1 @click="$router.push('/challenges')" v-bind:style="{ color : hover1, 'width' : '100px'}" @mouseover="hover1 = '#2d324a'" @mouseout="hover1 = 'white'">Challenges</h1>
          <h1 @click="$router.push('/scoreboard')" v-bind:style="{ color : hover2, 'width' : '100px'}" @mouseover="hover2 = '#2d324a'" @mouseout="hover2 = 'white'">Scoreboard</h1>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
import Login from '../modals/Login';
import axios from 'axios';

export default {
  created() {
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
  components: { Login },
  data: () => ({
    modal: false,
    hover1: 'white',
    hover2: 'white',


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
      this.$modal.show(Login,{
        hot_table : 'data',
        modal : this.$modal },{
        name: 'dynamic-modal',
        width : '400px',
        height : '430px',
        draggable: false,
      });
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
    closeModal() {
      this.modal = false;
    },
  }
};
</script>

<style>
  a{
    text-decoration: none;
  }
</style>
