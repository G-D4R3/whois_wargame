<template>
  <div v-on:click.self="$emit('close')" class='outer'>
    <slot name="modal-text">
      <h2 :style='title'>Problem</h2>
      <p :style='subtitle'>flag{y0u_ar3_aw3s0m3!}</p>
      <v-container fluid fill-height>
        <v-layout :style='form' align-bottom>
          <p>link:</p>
          <p> 12.12.12.12</p>
        </v-layout>
        <v-layout :style='form'>
          <input class='input' placeholder="enter your flag">
          <v-btn text>제출</v-btn>
        </v-layout>
      </v-container>
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
        paddingLeft: '10px',
        paddingRight: '10px',
        paddingBottom: '30px',
        fontSize: '20px',
      },
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
