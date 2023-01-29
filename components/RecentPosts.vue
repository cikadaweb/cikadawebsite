<template>
  <div class="recent-posts">
    <div class="recent-posts__nav">
      <div class="recent-posts__title">
        Последние посты
      </div>
      <nuxt-link class="recent-posts__link" to="/blog">Все</nuxt-link>
    </div>
    <div class="recent-posts__row">
      <div class="recent-posts__column" v-for="post in posts" :key="post.id">
        <AppRecentPost :item="post" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  async fetch() {
    try {
      await this.$store.dispatch('posts/fetchPosts');
    } catch (e) {
      console.error(e);
    }
  },
  computed: {
    posts() {
      return this.$store.getters['posts/getPosts'];
    }
  }
})
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_mixins.scss';
@import '@/assets/scss/_variables.scss';

.recent-posts {
  padding-top: 30px;
  padding-bottom: 30px;
}
.recent-posts__nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  @include for-size(tablet) {
    justify-content: center;
  }
}
.recent-posts__title {
  @include font(22px, 400, 60px);
  color: $blue-dark-color;
}
.recent-posts__link {
  display: inline-block;
  @include font(16px, 400, 24px);
  color: $blue-light-color2;
  text-decoration: none;
  @include for-size(tablet) {
    display: none;
  }
}
.recent-posts__row {
  display: flex;
  margin: 0 -10px;
  @include for-size(tablet) {
    flex-wrap: wrap;
  }
}
.recent-posts__column {
  width: calc(100% / 10) * 5;
  padding: 0 10px;
  @include for-size(tablet) {
    width: 100%;
  }
}

.recent-posts__column+.recent-posts__column {
  @include for-size(tablet) {
    margin-top: 30px;
  }
}
</style>
