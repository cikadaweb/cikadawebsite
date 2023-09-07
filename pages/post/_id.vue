<template>
  <div class="container">
    <PostSection />
  </div>
</template>

<script lang="ts">
import PostSection from '~/components/sections/post-page/PostSection.vue';

import Vue from 'vue'
export default Vue.extend({
  validate({ params }) {
    return Boolean(params.id)
  },
  components: {
    PostSection
  }
})
</script>

