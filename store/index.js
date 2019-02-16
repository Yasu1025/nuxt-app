import Vuex from 'vuex'
import axios from 'axios'
import * as TYPE from './mutationsType'

const createStore = () => {
    return new Vuex.Store({
        state: {
            loadedPosts: [],
            token: null
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
            },
            [TYPE.SET_TOKEN](state, payload) {
                state.token = payload
            },
            [TYPE.CLEAR_TOKEN](state) {
                state.token = null
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
            addPost(VuexContext, payload) {
                const createdPost = {
                    ...payload,
                    updatedDate: new Date()
                }
                return this.$axios.post(`/posts.json?auth=${VuexContext.state.token}`, createdPost)
                    .then(result => {
                        VuexContext.commit(TYPE.ADD_POSTS, {...createdPost, id: result.data.name})
                    })
                    .catch(e => console.log(e))
            },
            editPost(VuexContext, payload) {
                this.$axios.put(`/posts/${payload.id}.json?auth=${VuexContext.state.token}`, payload)
                 .then(res => {
                    VuexContext.commit(TYPE.EDIT_POSTS, payload)
                 })
                 .catch(e => console.log(e))
            },
            authenticateUser( VuexContext, payload) {
                let authURL = ""
                if(!payload.isLogin) {
                  authURL = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=${process.env.fbApiKey}`
                } else {
                  authURL = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=${process.env.fbApiKey}`
                }
                return this.$axios.post(authURL, {
                    email: payload.email,
                    password: payload.password,
                    returnSecureToken: true
                  })
                  .then(result => {
                      console.log(result)
                      VuexContext.commit(TYPE.SET_TOKEN, result.data.idToken)
                      localStorage.setItem('myToken', result.data.idToken)
                      localStorage.setItem('tokenExpire', new DataCue().getTime() + 3000000)
                      VuexContext.dispatch('setLogoutTimer', 3000000)
                  })
                  .catch(e => console.log(e))
            },
            setLogoutTimer( { commit }, duration) {
                setTimeout(() => {
                    commit(TYPE.CLEAR_TOKEN)
                }, duration);
            },
            initAuth(VuexContext) {
                const myToken = localStorage.getItem('myToken')
                const expireDate = localStorage.getItem('tokenExpire')

                if(new Date() > expireDate || !myToken) {
                    return
                }
                VuexContext.dispatch('setLogoutTimer', 3000000)
                VuexContext.commit(TYPE.SET_TOKEN, myToken)
            }
        },
        getters: {
            loadedPosts(state) { return state.loadedPosts },
            isAuthenticate(state) { return state.token != null }
        }
    })
}

export default createStore