<template>
  <div class="work-card">

    <div class="work-card__row">
      <div class="work-card__column work-card__column_image">
        <v-picture :classNameContainer="'work-card__picture'" :classNameImage="'work-card__img'" :imageUrl="item.image_url" />
      </div>

      <div class="work-card__column work-card__column_details">
        <div class="work-card__details">
          <h2 class="work-card__title">{{ item.title }}</h2>
          <span class="work-card__info__badge">{{ item.publish_date }}</span>
          <span class="work-card__info__tag">{{ item.tag }}</span>
          <div class="work-card__info__text">
            {{ item.text }}
          </div>
        </div>
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

}

.work-card__row {
  display: flex;
  padding-bottom: 15px;
  margin: 0 -9px;
  @include for-size(tablet) {
    flex-wrap: wrap;
  }
}

.work-card__column {
  padding: 0 9px;
}

.work-card__column+.work-card__column {
  @include for-size(tablet) {
    margin-top: 30px;
  }
}

.work-card__column_image {
  width: calc(100% / 10) * 3;
  @include for-size(tablet) {
    width: 100%;
  }
}

.work-card__column_details {
  width: calc(100% / 10) * 7;
  @include for-size(tablet) {
    width: 100%;
  }
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
