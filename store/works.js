export const state = () => ({
  works: [],
})

export const getters = {
  getWorks(state) {
    return state.works
  }
}

export const mutations = {
  setWorks(state, payload) {
    state.works = payload;
  }
}

export const actions = {
  async fetchWorks({commit}) {
    const response = await this.$axios.get('https://cikadaweb-61f6c-default-rtdb.firebaseio.com/works.json');
    const data = await response.data;
    commit('setWorks', data);
  }
}
