import Vuex from 'vuex'
import * as TYPE from './mutationsType'

const createStore = () => {
    return new Vuex.Store({
        state: {
            loadedPosts: []
        },
        mutations: {
            [TYPE.SET_POSTS](state, payload) {
                state.loadedPosts = payload
            }
        },
        actions: {
            nuxtServerInit({ commit }, context) {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        commit(TYPE.SET_POSTS, [
                            {
                                id: "1",
                                title: "title1",
                                previewText: "Prev Text",
                                thumbnail: "http://www.logo-asia.com/images/logo_design/loop_logo.jpg",
                            },
                            {
                                id: "2",
                                title: "title2",
                                previewText: "Prev Text",
                                thumbnail: "http://www.logo-asia.com/images/logo_design/loop_logo.jpg",
                                
                            }
                        ])
                    resolve()
                  }, 1000);
                })
            },
            setPosts({ commit }, payload) {
                commit(TYPE.SET_POSTS, payload)
            }
        },
        getters: {
            loadedPosts(state) { return state.loadedPosts }
        }
    })
}

export default createStore