<template>
  <div class="main">
    <div class="main__author">

      <div class="main__author-info">
        <h1 class="main__author-name">
          <span class="visually-hidden">Создать сайт, сделать сайт, приложение, wordpress</span>
          <span>Hi, I am Adel, Frontend Developer</span>
        </h1>
        <div class="main__author-text">
          Сайты для ваших товаров, услуг и бизнеса.
        </div>
        <button class="button main__author-button" type="button">Скачать резюме</button>
      </div>

      <div class="main__author__img">
          <v-picture :classNameContainer="'main__author__picture'" :classNameImage="'main__author__img'" :imageUrl="'cikada-logo.jpg'" />
      </div>
    </div>
  </div>
</template>

<script>
import vPicture from '@/components/pictire/v-picture.vue';

export default {
  components: {
    vPicture,
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_mixins.scss';
@import '@/assets/scss/_variables.scss';

.main {
  border-top: 34px solid $gray-color;
  margin-bottom: 71px;
  @include for-size(tablet) {
    border-top: 0;
  }
}
.main__author {
  display: flex;
  @include for-size(tablet) {
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
}

.main__author-info {
  width: calc(100% / 10) * 7;
  @include for-size(tablet) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    text-align: center;
  }
}
.main__author__img {
  width: calc(100% / 10) * 3;
  @include for-size(tablet) {
    width: calc(100% / 4) * 2;
    order: -1;
  }
}
.main__author-name {
  @include font(44px, 700, 60px);
  color: $blue-dark-color;
  margin: 0;
  margin-bottom: 40px;
  max-width: 416px;
  @include for-size(tablet) {
    @include font(32px, 700, 40px);
    margin-top: 35px;
  }
}
.main__author-text {
  @include font(16px, 400, 24px);
  color: $blue-dark-color;
  margin-bottom: 50px;
  max-width: 416px;
}
.main__author-button {
  @include font(20px, 500, 29px);
  padding: 17px 20px;
  border-radius: 2px;
  color: $white-color;
  background-color: $pink-color;
}
</style>
