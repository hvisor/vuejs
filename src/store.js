import Vue from 'vue'
import Vuex from 'vuex'
//import axios from 'axios'

//const url = 'https://jsonplaceholder.typicode.com/users'

import { actionUsers } from './actions/user'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        counter: 1,
        users:[]
    },
    getters: {
        doubleCounter(state) {
            return state.counter * 2
        },
        getUser(state){
            return state.users
        }
    },
    mutations: {
        mutateCounter(state, param) {
            state.counter += param
        },
        mutateUsers(state, param){
            state.users = param
        }
    },
    actions: {
        // async actionUsers(context) {
        //     const res = await axios.get(url)
        //     context.commit('mutateUsers', res.data)
        // }
        actionUsers: actionUsers
    }
})

export default store