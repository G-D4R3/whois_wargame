import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        username: '',
        isSigned: 'false',
        score: [
            {
                name: "dare",
                score: 200,
            },
            {
                name: "ever",
                score: 400,
            }
        ]

    }
});
