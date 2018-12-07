export const state = () => ({
  all: []
})

export const actions = {
  async fetchAllPosts ({commit}) {
    let posts = await this.$axios.$get('posts')
    commit('setPosts', posts)
  },
  async fetchPost ({commit, state}, id) {
    let existingPost = state.all.find(post => post.id === id)
    if (!existingPost) {
      let post = await this.$axios.$get(`posts/${id}`)
      commit('setPost', post)
    }
  }
}

export const mutations = {
  setPost (state, post) {
    state.all.push(post)
  },
  setPosts (state, posts) {
    state.all = posts
  }
}
