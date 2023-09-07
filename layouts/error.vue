<template>
  <div class="error-layout">
    <div class="container error-layout__container">
      <h1 class="error-layout__title">Упс, Ошибка 404 - такой страницы не существует</h1>
      <Nuxt-link class="error-layout__link" to="/">Вернуться на главную <fa icon="reply-all"/></Nuxt-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.error-layout__container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
}

.error-layout__title {
  @include font(44px, 700, 60px);
  color: $font-primary;
  margin: 0;
  text-align: center;
}

.error-layout__link {
  @include font(26px, 700, 38px);
  text-decoration: none;
  color: $font-active-link;
}
</style>
