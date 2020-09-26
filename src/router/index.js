import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/views/MainPage';
import Challenges from '@/views/Challenges'
import Scoreboard from "@/views/Scoreboard"
import Join from '@/views/Join'

Vue.use(Router)

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes:[
    {
      path: '/',
      name: 'main',
      component: MainPage,
    },
    {
      path: '/challenges',
      name: 'challenges',
      component: Challenges,
    },
    {
      path: '/scoreboard',
      name: 'scoreboard',
      component: Scoreboard,
    },
    {
      path: '/join',
      name: 'join',
      component: Join,
    },
  ]
});
