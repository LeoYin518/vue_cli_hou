const user = {
    state: {
        name: "tom"
    },
    actions: {
        /* 第一个参数默认是上下文对象 context , 这个对象的 commit，能够调用到 mutations 中的函数  */
        editName({ commit }, value) {
            commit("EDIT_NAME", value);
        },
    },
    mutations: {
        /* 第一个参数，默认是 state */
        EDIT_NAME(state, value) {
            state.name = value;
        },
    }
};

export default user;