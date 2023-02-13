export const state = () => ({
  posts: [],
  currentPost: {},
})

export const getters = {
  getPosts(state) {
    return state.posts
  },
  getCurrentPost(state) {
    return state.currentPost
  },
}

export const mutations = {
  setPosts(state, payload) {
    state.posts = payload
  },
  setCurrentPost(state, payload) {
    state.currentPost = payload
  },
}

export const actions = {
  async fetchPosts({ commit }) {
    const response = await this.$axios.get(
      'https://cikadaweb-61f6c-default-rtdb.firebaseio.com/posts.json'
    )
    const data = await response.data
    commit('setPosts', data)
  },
  async fetchCurrentPost({ commit }, id) {
    const response = await this.$axios.get(
      'https://cikadaweb-61f6c-default-rtdb.firebaseio.com/posts.json'
    )
    const data = await response.data
    // Backend
    const currentPost = data.filter((item) => item.id === id)[0]
    commit('setCurrentPost', currentPost)
  },
}
