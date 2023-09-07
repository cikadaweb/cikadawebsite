<template>
  <div class="post-section">
    <AppBreadcrumb :breadcrumbs="breadcrumbs"/>
    <AppPost :item="post" />
  </div>
</template>

<script>
import AppBreadcrumb from '~/components/UI/BaseBreadcrumb.vue';
import AppPost from '~/components/posts/AppPost.vue';

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
          title: 'Название поста',
          url: '/post'
        },
      ]
    }
  },
  async fetch() {
    try {
      await this.$store.dispatch('posts/fetchCurrentPost', 1);
    } catch (e) {
      console.error(e);
    }
  },
  computed: {
    post() {
      return this.$store.getters['posts/getCurrentPost'];
    }
  },
  components: {
    AppBreadcrumb, AppPost,
  }
}
</script>

<style lang="scss" scoped>

.post-section {
  padding-top: 114px;
}
</style>
