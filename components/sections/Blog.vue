<template>
  <div class="blog">
    <AppBreadcrumb :breadcrumbs="breadcrumbs"/>
    <h1 class="blog__title">Блог</h1>
    <div class="blog__row">
      <div class="blog__column" v-for="post in posts" :key="post.id">
        <AppRecentPost :item="post" isBlogPage/>
      </div>
    </div>
  </div>
</template>

<script>
import AppRecentPost from '@/components/posts/AppRecentPost.vue'
import AppBreadcrumb from '~/components/UI/BaseBreadcrumb.vue';

export default {
  data() {
    return {
      breadcrumbs: [
        {
          id: 1,
          title: 'Главная',
          url: '/'
        },
        {
          id: 2,
          title: `Название поста`,
          url: '/post'
        },
      ]
    }
  },
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
  },
  components: {
    AppRecentPost, AppBreadcrumb
  }
}
</script>



<style lang="scss" scoped>
.blog__title {
  @include font(44px, 700, 60px);
    margin: 0 0 40px;
  @include for-size(tablet) {
    @include font(30px, 700, 60px);
    margin-top: 35px;
  }
}

.blog__row {
  display: flex;
  flex-direction: column;
}

.blog__column {

}

.blog__column+.blog__column {
  @include for-size(tablet) {
    margin-top: 30px;
  }
}
</style>
