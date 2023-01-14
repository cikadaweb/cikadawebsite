<template>
  <div>

    <AppContainer>
      <TheHeader />
      <Main />
    </AppContainer>

    <div class="recent-posts-container">
      <AppContainer>
        <RecentPosts />
      </AppContainer>
    </div>

    <AppContainer>
      <FeaturedWorks />
      <TheFooter />
    </AppContainer>

  </div>
</template>

<style lang="scss">
@import '@/assets/scss/_variables.scss';

.recent-posts-container {
  background-color: $bg-blue-color;
}
</style>

