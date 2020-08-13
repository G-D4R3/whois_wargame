<template>
  <v-app v-bind:style="{'width':'100%', 'height':'100%', 'background-image': 'url(' + require('@/assets/background.png') + ')'}">
    <v-layout align-end justify-end>
      <router-link :to="{ name: 'mypage' }">
        <p :style="{'color' : 'white'}">{{ $store.state.username }}</p>
      </router-link>
      <v-btn text @click="openModal" v-bind:style="signin" align-right>{{ $store.state.isSigned }}</v-btn>
      <Login @close="closeModal" v-if="modal"></Login>
    </v-layout>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex>
          <img src="@/assets/title.png">
        </v-flex>
        <v-flex>
          <router-link :to="{ name: 'challenges' }">
            <h1 v-bind:style="{ color : hover1, 'width' : '100px'}" @mouseover="hover1 = '#2d324a'" @mouseout="hover1 = 'white'">Challenges</h1>
          </router-link>
          <router-link :to="{ name: 'scoreboard' }">
            <h1 v-bind:style="{ color : hover2, 'width' : '100px'}" @mouseover="hover2 = '#2d324a'" @mouseout="hover2 = 'white'">Scoreboard</h1>
          </router-link>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
import Login from './Login';

export default {
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
      if(this.$store.state.isSigned == 'sign in'){
        this.$modal.show(Login,{
          hot_table : 'data',
          modal : this.$modal },{
          name: 'dynamic-modal',
          width : '400px',
          height : '400px',
          draggable: false,
        });
      }
      else if(this.$store.state.isSigned =='sign out'){
        this.$store.isSigned = 'sign in';
        this.$store.id = '';
        this.$store.pw = '';
        this.$store.username = '';
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
