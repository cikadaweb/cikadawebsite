<template>
  <div class="work-card">

    <div class="work-card__image">
      <v-picture :classNameContainer="'work-card__picture'" :classNameImage="'work-card__img'"
        :imageUrl="item.image_url" />
    </div>

    <div class="work-card__details">
      <h2 class="work-card__title">{{ item.title }}</h2>
      <span class="work-card__info__badge">{{ item.publish_date }}</span>
      <span class="work-card__info__tag">{{ item.tag }}</span>
      <div class="work-card__info__text">
        {{ item.text }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  defineProps, PropType,
} from 'vue';

interface IPropsWork {
  id: number,
  title: string,
  publish_date: string,
  tag: string,
  text: string,
  image_url: string,
}

const props = defineProps({
  item: {
    type: Object as PropType<IPropsWork>,
    required: true,
  },
});

</script>

<style lang="scss" scoped>
@import '@/assets/scss/_mixins.scss';
@import '@/assets/scss/_variables.scss';
.work-card {
  display: flex;
  padding-bottom: 15px;
}

.work-card__image {
  width: calc(100% / 10) * 3;
  padding-right: 9px; // ToDo
}

.work-card__details {
  width: calc(100% / 10) * 7;
  padding-left: 9px; // ToDo
}

.work-card__title {
  @include font(30px, 700, 44px);
  color: $blue-dark-color;
  margin: 0;
  margin-bottom: 16px;
}

.work-card__info__badge {
  @include font(18px, 900, 60px);
  color: $white-color;
  background: $blue-dark-color;
  padding: 2px 10px;
  border-radius: 16px;
}

.work-card__info__tag {
  @include font(20px, 400, 29px);
  color: $gray-light-color1;
  margin-left: 20px;
}

.work-card__info__text {
  @include font(16px, 400, 24px);
  color: $blue-dark-color;
}
</style>
