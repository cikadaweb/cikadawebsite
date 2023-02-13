<template>
  <div class="post">
    <AppBreadcrumb />
    <AppPost :item="post" />
  </div>
</template>

<script>
import AppBreadcrumb from '@/components/breadcrumb/AppBreadcrumb.vue';
import AppPost from '@/components/posts/AppPost.vue';

export default {
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
@import '@/assets/scss/_mixins.scss';
@import '@/assets/scss/_variables.scss';

</style>
