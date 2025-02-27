import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import user from "@/store/modules/user";
import getters from "@/store/getter";

export default new Vuex.Store({
    modules: {
        user,
    },
    getters
})