import Vuex from 'vuex'
import axios from 'axios'

export const state = () => ({
    data: null,
    realities: null
})

export const actions = {
    // nuxtServerInit is called by Nuxt.js before server-rendering every page
    async nuxtServerInit({
        commit,
        dispatch
    }) {
        await dispatch('storeDispatchFunc')
    },

    // axios...
    async storeDispatchFunc({
        commit
    }) {
        const {
            data
        } = await axios.get('https://edgeryders.eu/c/participio.json?order=created')
        commit('setPosts', data)



    },
}

export const mutations = {
    setPosts: (state, posts) => {
        state.data = posts
    },
    setCurrentPost: (state, post) => {
        state.realities = post
    }

}