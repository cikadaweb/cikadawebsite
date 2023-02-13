<template>
  <div class="error-layout">
    <AppContainer class="error-layout__container">
      <h1 class="error-layout__title">Упс, Ошибка 404 - такой страницы не существует</h1>
      <nuxt-link class="error-layout__link" to="/">Вернуться на главную <font-awesome-icon :icon="['fas', 'reply']" /></nuxt-link>
    </AppContainer>
  </div>
</template>

<script setup lang="ts">
import AppContainer from '@/components/AppContainer.vue';


</script>

<style lang="scss" scoped>
@import '@/assets/scss/_mixins.scss';
@import '@/assets/scss/_variables.scss';
.error-layout__container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
}

.error-layout__title {
  @include font(44px, 700, 60px);
  color: $blue-dark-color;
  margin: 0;
  text-align: center;
}

.error-layout__link {
  @include font(26px, 700, 38px);
  text-decoration: none;
  color: $blue-light-color1 ;
}
</style>
