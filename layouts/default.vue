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

<script setup lang="ts">
import AppContainer from '@/components/AppContainer.vue';
import TheHeader from '@/components/header/TheHeader.vue';
import TheFooter from '@/components/footer/TheFooter.vue';

</script>
