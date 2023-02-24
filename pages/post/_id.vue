<template>
  <div>
    <AppContainer>
      <Post />
    </AppContainer>
  </div>
</template>

<script lang="ts">
import AppContainer from '@/components/AppContainer.vue';
import Post from '@/components/pages/Post.vue';

import Vue from 'vue'
export default Vue.extend({
  validate({ params }) {
    return Boolean(params.id)
  },
  components: {
    AppContainer, Post
  }
})
</script>

