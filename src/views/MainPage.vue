<template>
  <v-app v-bind:style="{'width':'100%', 'height':'100%', 'background-image': 'url(' + require('@/assets/background.png') + ')'}">
    <v-layout align-end justify-end>
      <p @click="$router.push('/mypage')" :style="{'color' : 'white'}">{{ $store.state.username }}</p>
      <v-btn text @click="$router.push({name: 'join'})" v-bind:style="signin" align-right>join</v-btn>
      <v-btn text @click="openModal" v-bind:style="signin" align-right>sign in</v-btn>
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
      this.$modal.show(Login,{
        hot_table : 'data',
        modal : this.$modal },{
        name: 'dynamic-modal',
        width : '400px',
        height : '430px',
        draggable: false,
      });
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
