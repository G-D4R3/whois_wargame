<template>
  <div v-on:click.self="$emit('close')">
    <slot name="modal-text">
      <v-img src="@/assets/logo2.png" contain height="120px" :style="{'marginTop': '30px'}"></v-img>
      <form @submit.prevent="login()">
        <div :style="formbox">
          <input v-model="form.id" class='input' placeholder="ID">
        </div>
        <div :style='formbox'>
          <input v-model="form.pw" type='password' class='input' placeholder="Password">
        </div>
        <div :style='formbox2'>
          <v-btn depressed @click.prevent="login()" :style='btn'>로그인</v-btn>
        </div>
        <form :style='formbox3'>
          <router-link :to="{ name: 'join' }">
            <p @click="$emit('close')" class="find">회원가입</p>
          </router-link>
          <p class="find" :style="{'marginTop': '5px'}">아이디/비밀번호 찾기</p>
        </form>
      </form>
    </slot>
  </div>
</template>


<script>
  import axios from 'axios'

  export default {
    data: () =>({
      form: {
        id: '',
        pw: '',
        name: '',
      },
      isUnderLined : true,
      title: {
        marginTop: '30px',
        textAlign: 'center',
        width: '100%',
      },
      title2: {
        marginTop: '10px',
        textAlign: 'center',
        width: '100%',
        marginBottom: '30px',
      },
      input: {
        border: '1px',
        borderColor: '#333333',
      },
      formbox: {
        width: '100%',
        paddingTop: '10px',
        paddingRight: '30px',
        paddingLeft: '30px',
        fontSize : '18px',
        color: '#536976',
      },
      formbox2: {
        marginLeft: '30px',
        marginRight: '30px',
        marginTop: '20px',
        fontSize : '18px',
        color: '#536976',
      },
      formbox3: {
        marginTop: '20px',
        textAlign: 'center',
        fontSize: '14px',
      },
      btn: {
        width: '100%',
        backgroundColor : '#536976',
        color: 'white'
      }
    }),
    methods: {
      login: function(event){
        if(event) event.preventDefault();
        const id  = this.form.id;
        const password =  this.form.pw;
        axios.post('/api/login', {id, password}, {"Content-Type": "application-json"}).then((res) => {
          if(res.data.user){
            this.$store.commit("setUser", res.data.user);
            //this.$router.push({name: 'main'});
            //this.$forceUpdate();
            location.reload();
            this.$emit('close');
          }
          else if(res.data.message){
            alert(res.data.message);
          }
        }).catch((err)=>{
          console.log(err);
        });
      }
    },
  }
</script>

<style>
  .input {
    margin-top: 10px;
    border: 1px solid lightgrey;
    width: 100%;
    height: 40px;
    padding-left: 10px;
    size: 20px;
    padding-right: 10px;
  }
  .find:hover{
    text-decoration: underline;
  }
</style>
