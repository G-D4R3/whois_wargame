import Vue from 'vue'
import Router from 'vue-router'
import MainPage from './MainPage';
import Challenges from './Challenges';
import Login from './Login';
import Scoreboard from "./Scoreboard";
import MyPage from './MyPage';
import Join from './Join';

Vue.use(Router)

export const router = new Router({
  routes:[
    {
      path: '',
      name: 'main',
      component: MainPage,
    },
    {
      path: '/challenges',
      name: 'challenges',
      component: Challenges,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
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
      path: '/join ',
      name: 'join',
      component: Join,
    }
  ]
});
