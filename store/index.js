import Vuex from 'vuex'
import axios from 'axios'
import * as TYPE from './mutationsType'

const createStore = () => {
    return new Vuex.Store({
        state: {
            loadedPosts: []
        },
        mutations: {
            [TYPE.SET_POSTS](state, payload) {
                state.loadedPosts = payload
            },
            [TYPE.ADD_POSTS](state, payload) {
                state.loadedPosts.push(payload)
            },
            [TYPE.EDIT_POSTS](state, payload) {
                const postIndex = state.loadedPosts.findIndex(post => post.id === payload.id)
                state.loadedPosts[postIndex] = payload
            }
        },
        actions: {
            // work on server
            nuxtServerInit({ commit }, context) {
                return context.app.$axios.get('/posts.json')
                            .then(res => {
                                const postsArray = []
                                for(const key in res.data) {
                                    postsArray.push({...res.data[key], id: key})
                                }
                                commit(TYPE.SET_POSTS, postsArray)
                            })
                            .catch(e => context.error(e))
            },
            setPosts({ commit }, payload) {
                commit(TYPE.SET_POSTS, payload)
            },
            addPost({ commit }, payload) {
                const createdPost = {
                    ...payload,
                    updatedDate: new Date()
                }
                return this.$axios.post('/posts.json', createdPost)
                    .then(result => {
                        commit(TYPE.ADD_POSTS, {...createdPost, id: result.data.name})
                    })
                    .catch(e => console.log(e))
            },
            editPost({ commit }, payload) {
                this.$axios.put(`/posts/${payload.id}.json`, payload)
                 .then(res => {
                     commit(TYPE.EDIT_POSTS, payload)
                 })
                 .catch(e => console.log(e))
            }
        },
        getters: {
            loadedPosts(state) { return state.loadedPosts }
        }
    })
}

export default createStore