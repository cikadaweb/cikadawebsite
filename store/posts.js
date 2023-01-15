export const state = () => ({
  posts: [],
})

export const getters = {
  getPosts(state) {
    return state.posts
  }
}

export const mutations = {
  setPosts(state, payload) {
    state.posts = payload;
  }
}

export const actions = {
  async fetchPosts({commit}) {
    const response = await this.$axios.get('https://cikadaweb-61f6c-default-rtdb.firebaseio.com/posts.json');
    const data = await response.data;
    commit('setPosts', data);
  }
}
