<template>
    <v-app v-bind:style="{'width':'100%', 'height':'100%', 'background-image': 'url(' + require('@/assets/background.png') + ')'}">
        <v-container fluid>
            <v-layout align-start justify-start>
                <router-link :to="{ name: 'main' }">
                    <v-btn text :style="{'color':'white', 'marginTop': '10px','marginLeft': '10px','width': '100px', 'height': '50px',}">Home</v-btn>
                </router-link>
                <router-link :to="{ name: 'challenges' }">
                    <v-btn text :style="{'color':'white', 'marginTop': '10px', 'marginLeft': '10px','width': '100px', 'height': '50px',}">Challenges</v-btn>
                </router-link>
                <router-link :to="{ name: 'scoreboard' }">
                    <v-btn text :style="{'color':'white', 'marginTop': '10px', 'marginLeft': '10px','width': '120px', 'height': '50px',}">Scoreboard</v-btn>
                </router-link>
            </v-layout>
            <v-layout justify-center>
                <h1 :style="{'marginTop': '30px', 'color': 'white'}">Join</h1>
            </v-layout>
        </v-container>
        <v-container>
            <v-layout align-center justify-center>
                <form @submit.prevent>
                    <div class="form-group" row>
                        <label for="name">name</label>
                        <input type="text" class="form-control" id="name" v-model="form.name">
                    </div>
                    <div class="form-group" row>
                        <label for="id">Id</label>
                        <input type="text" class="form-control" id="id" v-model="form.id">
                        <div v-if="!$v.form.id.required">ID is required</div>
                        <div class="error" v-if="!$v.form.id.alphaNum">ID can only contain letters and numbers</div>
                        <div class="error" v-if="!$v.form.id.minLength">ID must have at least {{$v.form.id.$params.minLength.min}} letters.</div>
                        <div class="error" v-if="!$v.form.id.maxLength">ID is too long. It can contains maximium {{$v.form.id.$params.maxLength.max}} letters.</div>
                    </div>
                    <div class="form-group">
                        <label for="password">password</label>
                        <input type="password" class="form-control" id="password" v-model="form.password">
                        <div class="error" v-if="!$v.form.password.required">Password is required</div>

                    </div>
                    <div class="form-group" row>
                        <label for="emailAddress">email</label>
                        <input type="email" class="form-control" id="emailAddress" v-model="form.emailAddress">
                        <div class="error" v-if="!$v.form.emailAddress.required">Email address is required</div>
                        <div class="error" v-if="!$v.form.emailAddress.email">This is not a valid email address</div>
                        <div class="error" v-if="!$v.form.emailAddress.maxLength">Email address is too long. It can contains maximium {{$v.form.emailAddress.$params.maxLength.max}} letters.</div>
                    </div>
                    <v-btn @click.prevent="submitForm()" type="submit" class="submit-button">Create account</v-btn>
                </form>
            </v-layout>
        </v-container>
    </v-app>
</template>

<script>
    import axios from 'axios'
    import { required, email, minLength, maxLength, alphaNum } from 'vuelidate/lib/validators'
    export default{
        data:() => ({
            form: {
                id: '',
                password: '',
                name: '',
                emailAddress: '',
            },
            errorMessage:'',
            signin :{
                width: '100px',
                height: '50px',
                marginTop: '10px',
                marginRight: '10px',
                color: 'white',
            },
            container: {
                backgroundColor: 'white',
                margin: '50px',
            },
        }),
        validations: {
            form: {
                id: {
                    required,
                    minLength: minLength(4),
                    maxLength: maxLength(20),
                    alphaNum
                },
                emailAddress: {
                    required,
                    email,
                    maxLength: maxLength(100)
                },
                password: {
                    required,
                    minLength: minLength(6),
                    maxLength: maxLength(20)
                }
            }
        },
        methods: {
            submitForm(){
                axios.post('/api/join', {
                    id : this.form.id,
                    password: this.form.password,
                    email: this.form.emailAddress,
                    name: this.form.name
                }).then(() => {
                    this.$router.push('/')
                }).catch((err)=>{
                    alert(err.response.data.message)
                });
            }
        }
    }
</script>

<style lang="scss" scoped>
    .register-form {
        margin-top: 50px;
        max-width: 320px;
    }
    .form-group{
        max-width: 400px;
    }

    .form-group label {
        font-weight: bold;
        color: white;
        width: 30px;
        display: flex;
    }
    .form-control{
        border-radius: 5px;
        margin-bottom: 10px;
        background-color: white;
        min-width: 300px;
        max-width: 320px;
        height: 40px;
        padding: 10px;
    }

    .submit-button{
        margin-top: 10px;
        min-width: 300px;
        max-width: 320px;
        width: 300px;
    }


</style>
