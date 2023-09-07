<template>
  <div>
    <div class="container">
      <MainSection />
    </div>

    <div class="recent-posts-container">
      <div class="container">
        <RecentPostsSection />
      </div>
    </div>

    <div class="container">
      <PortfolioSection />
    </div>
  </div>
</template>

<script setup lang="ts">
import MainSection from '~/components/sections/main-page/MainSection.vue';
import RecentPostsSection from '~/components/sections/main-page/RecentPostsSection.vue';
import PortfolioSection from '~/components/sections/main-page/PortfolioSection.vue';
</script>

<style lang="scss">
.recent-posts-container {
  background-color: $bg-skyblue;
}
</style>

