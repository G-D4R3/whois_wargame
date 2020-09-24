<template>
  <v-app v-bind:style="{'width':'100%', 'height':'100%', 'background-image': 'url(' + require('@/assets/background.png') + ')'}">
    <v-container fluid>
      <v-layout align-start justify-end>
        <img @click="$router.push('/')" src="@/assets/title2.png" :style="{'marginTop': '10px', 'marginLeft': '10px','width': '100px', 'height': '50px',}">
        <v-btn @click="$router.push('/scoreboard')" text :style="{'color':'white', 'marginTop': '10px', 'marginLeft': '30px','width': '100px', 'height': '50px',}">Scoreboard</v-btn>
        <v-spacer></v-spacer>
        <v-btn text @click="$router.push({name: 'join'})" v-bind:style="signin" align-right>join</v-btn>
        <v-btn text @click="openModal(0)" v-bind:style="signin" align-right>sign in</v-btn>
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
import Login from './Login';
import Problem from './Problem';
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
  },
  created() {
    axios.get("/api/challenges").then(response => { this.problems = response.data; });
  },
};
</script>
