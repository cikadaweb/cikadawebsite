<template>
  <div>
    <AppContainer>
      <Main />
    </AppContainer>

    <div class="recent-posts-container">
      <AppContainer>
        <RecentPosts />
      </AppContainer>
    </div>

    <AppContainer>
      <FeaturedWorks />
    </AppContainer>
  </div>
</template>

<script setup lang="ts">
import AppContainer from '@/components/AppContainer.vue';
import Main from '@/components/pages/Main.vue';
import RecentPosts from '@/components/posts/RecentPosts.vue';
import FeaturedWorks from '@/components/portfolio/FeaturedWorks.vue';

</script>

<style lang="scss">
@import '@/assets/scss/_variables.scss';

.recent-posts-container {
  background-color: #EDF7FA;
}
</style>

