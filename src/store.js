import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        user: null,
        issigned : "sign in",
        userMenuItems: [
            {
                title: "마이페이지",
                action: "mypage",
            },
            {
                title: "로그아웃",
                action: "logout",
            }
        ],
    },
    getters: {
        user: (state) => {
            return state.user;
        }
    },
    mutations: {
        setUser(state, user) {
            state.user = user;
        },
    },
});
