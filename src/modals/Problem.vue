<template>
  <div v-on:click.self="$emit('close')" class="modal modal-overlay">
    <div class="modal-window">
      <div class="modal-content">
        <slot name="modal-text">
          <h2 :style='titles'>{{pd.name}}</h2>
          <p :style="{'textAlign': 'right'}">{{pd.score}}point</p>
          <div :style="outer">
            <p :style='subtitle'>{{pd.description}}</p>
            <router-link :to="{ name: 'main' }">
              <p @click="$emit('close')">{{pd.link}}</p>
            </router-link>
          </div>
          <div :style="form">
            <form @submit.prevent>
              <div class="form-group">
                <v-layout>
                  <input type="text" class="form-control" id="flag" placeholder="flag">
                  <v-btn :style="btn" depressed @click.prevent="assign()">제출</v-btn>
                </v-layout>
              </div>
            </form>
          </div>
        </slot>
      </div>
    </div>
  </div>
</template>


<script>
  import axios from 'axios';

  export default {
    props: {
      pd: Object
    },
    data: () =>({
      titles: {
        marginTop: '30px',
        textAlign: 'center',
        width: '100%',
        marginBottom: '20px',
      },
      subtitle:{
        fontSize: '20px',
        width: '100%',
        color: 'black'
      },
      outer: {
        backgroundColor: '#EEEEEE',
        textAlign: 'left',
        paddingTop: '10px',
        paddingLeft: '10px',
        paddingRight: '10px',
        marginBottom: '20px',
      },
      form: {
        width: '100%',
        fontSize: '18px',
      },
      btn: {
        marginLeft: '10px',
        backgroundColor: '#676f82',
        color: 'white',
      }
    }),
    methods: {
      assign() {
        axios.get('/api/login').then((res)=>{
          if(res.data.user){
            const userID = res.data.user.userID;
            console.log(userID);
          }
          else{
            alert("로그인이 필요합니다.");
            this.$emit('close');
          }
        })
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .modal {
    &.modal-overlay {
      display: flex;
      align-items: center;
      justify-content: center;
      position: fixed;
      z-index: 30;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
    }

    &-window {
      background: #fff;
      border-radius: 4px;
      overflow: hidden;
    }

    &-content {
      padding: 10px 20px;
    }

    &-footer {
      background: #ccc;
      padding: 10px;
      text-align: right;
    }
  }

  // 오버레이 트랜지션
  .modal-enter-active, .modal-leave-active {
    transition: opacity 1.0s;

    // 오버레이에 포함되어 있는 모달 윈도의 트랜지션
    .modal-window {
      transition: opacity 0.4s, transform 0.4s;
    }
  }

  // 딜레이가 적용된 모달 윈도가 제거된 후에 오버레이가 사라짐
  .modal-leave-active {
    transition: opacity 0.6s ease 0.4s;
  }

  .modal-enter, .modal-leave-to {
    opacity: 0;

    .modal-window {
      opacity: 0;
      transform: translateY(-100px);
    }
  }
</style>
