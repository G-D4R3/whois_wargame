import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/components/MainPage';
import Challenges from '@/components/Challenges'
import Scoreboard from "@/components/Scoreboard"
import MyPage from '@/components/MyPage'
import Join from '@/components/Join'

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
      path: '/mypage',
      name: 'mypage',
      component: MyPage,
    },
    {
      path: '/join',
      name: 'join',
      component: Join,
    },
  ]
});
