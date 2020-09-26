<template>
  <div v-on:click.self="$emit('close')" class='outer'>
    <slot name="modal-text">
      <h2 :style='title'>Tuts</h2>
      <p :style='subtitle'>문제를 푸세요~~</p>
      <div :style="form">
        <router-link :to="{ name: 'main' }">
          <p @click="$emit('close')" >link: 127.0.0.1</p>
        </router-link>
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
</template>


<script>

  export default {
    data: () =>({
      title: {
        marginTop: '30px',
        textAlign: 'center',
        width: '100%',
        marginBottom: '50px',
      },
      subtitle:{
        fontSize: '22px',
        width: '100%',
        paddingLeft: '20px',
        paddingRight: '20px',
      },
      form: {
        width: '100%',
        paddingLeft: '20px',
        paddingRight: '20px',
        paddingBottom: '30px',
        fontSize: '18px',
      },
      btn: {
        marginLeft: '10px',
        backgroundColor: '#676f82',
        color: 'white',
      }
    }),
  }
</script>

<style>
.outer{
  height: 100%;
  width: 100%;
  padding: 10px;
}
</style>
