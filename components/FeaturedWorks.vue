<template>
  <div class="featured-works">

    <div class="featured-works__flag">

    </div>

    <div class="featured-works__title">
      Featured works
    </div>

    <div class="featured-works__row">
      <div class="featured-works__column" v-for="work in works" :key="work.id">
        <AppWork :item="work"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const works = ref([
  {
    id: 1,
    title: 'Promo страница Mercedes Benz',
    publish_date: '2020',
    tag: 'Promo',
    text: 'Промо страница продажи новой модели Mercedez бизнес класса!',
    image_url: 'promo-mercedes.png',
  },
  {
    id: 2,
    title: 'Сервис доставки еды на дом',
    publish_date: '2021',
    tag: 'Интернет-магазин',
    text: 'Рестораны различных кухонь всего за 30 минут.',
    image_url: 'delivery-food.png',
  }
]);
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_mixins.scss';
@import '@/assets/scss/_variables.scss';
.featured-works {
  padding-bottom: 18px;
  margin-bottom: 83px; // ToDo
}
.featured-works__flag { //ToDo
  width: 11px;
  height: 36px;
  left: 149px;
  top: 991px;
  background: $gray-color;
}
.featured-works__title {
  @include font(22px, 400, 60px);
  color: $blue-dark-color;
  margin-bottom: 20px;
  @include for-size(tablet) {
    text-align: center;
  }
}
.featured-works__row {
  display: flex;
  flex-direction: column;
}
.featured-works__column {
  border-bottom: 1px solid $gray-light-color2;
  margin-bottom: 30px;
}
</style>
