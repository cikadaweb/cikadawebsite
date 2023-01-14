<template>
  <div class="recent-posts">
    <div class="recent-posts__nav">
      <div class="recent-posts__title">
        Recent posts
      </div>
      <nuxt-link class="recent-posts__link" to="/blog">View all</nuxt-link>
    </div>
    <div class="recent-posts__row">
      <div class="recent-posts__column" v-for="post in posts" :key="post.id">
        <AppRecentPost :item="post" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const posts = ref([
  {
    id: 1,
    title: 'Entity Framework в WinForms',
    publish_date: '6 Января 2023',
    tag: 'Windows Forms',
    text: 'На сегодняшний день Winforms все еще остается платформой для многих бизнес-приложений, ориентированных на работу с данными, и привязка данных является неотъемлемой частью разработки для Winforms. ',
  },
  {
    id: 2,
    title: 'Vuetify как начать работать',
    publish_date: '30 Декабря 2022',
    tag: 'Vue, Vuetify',
    text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
  }
]);
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
}
.recent-posts__row {
  display: flex;
  margin: 0 -10px;
}
.recent-posts__column {
  width: calc(100% / 10) * 5;
  padding: 0 10px;
}
</style>
