<template>
  <div>
    <TheHeader />
    <Nuxt />
    <div class="container">
      <TheFooter />
    </div>
  </div>
</template>

<script setup lang="ts">
import TheHeader from '@/components/header/TheHeader.vue';
import TheFooter from '@/components/footer/TheFooter.vue';

</script>
