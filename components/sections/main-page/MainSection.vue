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
        <BaseButton
          color="primary"
          size="large"
          icon="file-arrow-down"
        >Скачать резюме
        </BaseButton>
      </div>

      <div class="main__author__img">
        <BaseImage :img-src="'adel-garipov.jpeg'" :height="243" :width="243" border="rounded-circle"></BaseImage>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseButton from "~/components/UI/BaseButton.vue";
import BaseImage from "~/components/UI/BaseImage.vue";

</script>

<style lang="scss" scoped>

.main {
  padding-top: 114px;
  border-top: 34px solid $border-secondary;
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
  color: $font-primary;
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
  color: $font-primary;
  margin-bottom: 50px;
  max-width: 416px;
}
</style>
