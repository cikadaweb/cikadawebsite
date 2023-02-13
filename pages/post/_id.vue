<template>
  <div>
    <AppContainer>
      <Post />
    </AppContainer>
  </div>
</template>

<script setup lang="ts">
import AppContainer from '@/components/AppContainer.vue';
import Post from '@/components/pages/Post.vue';

import { useRoute } from '@nuxtjs/composition-api'

const route = useRoute();

</script>

