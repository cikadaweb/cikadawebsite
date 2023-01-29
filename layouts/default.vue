<template>
  <div>
    <AppContainer>
      <TheHeader />
    </AppContainer>
    <Nuxt />
    <AppContainer>
      <TheFooter />
    </AppContainer>
  </div>
</template>

<script lang="ts">
import AppContainer from '@/components/AppContainer.vue';
import TheHeader from '@/components/header/TheHeader.vue';
import TheFooter from '@/components/TheFooter.vue';

import Vue from 'vue'
export default Vue.extend({
  components: {
    AppContainer, TheHeader, TheFooter,
  }
})
</script>
