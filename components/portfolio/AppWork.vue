<template>
  <div class="work-card">
    <div class="work-card__row">
      <div class="work-card__column work-card__column_image">
        <a class="work-card__link" :href="item.link" target="_blank">
          <BaseImage :img-src="item.image_url" :height="180" :width="246" border="rounded"/>
        </a>
      </div>

      <div class="work-card__column work-card__column_details">
        <div class="work-card__details">
          <h2 class="work-card__title">
            <a class="work-card__link" :href="item.link" target="_blank">{{ item.title }}</a>
          </h2>
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
import BaseImage from "~/components/UI/BaseImage.vue";

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
  link: string,
}

const props = defineProps({
  item: {
    type: Object as PropType<IPropsWork>,
    required: true,
  },
});

</script>

<style lang="scss" scoped>

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
  width: calc(100% / 4) * 3;
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

.work-card__link {
  text-decoration: none;
  color: inherit;
}

.work-card__title {
  @include font(30px, 700, 44px);
  margin: 0 0 16px
}

.work-card__info__badge {
  @include font(18px, 900, 60px);
  color: $font-white;
  background: $font-primary;
  padding: 2px 10px;
  border-radius: 16px;
}

.work-card__info__tag {
  @include font(20px, 400, 29px);
  color: $font-gray;
  margin-left: 20px;
}

.work-card__info__text {
  @include font(16px, 400, 24px);
  color: $font-primary;
}
</style>
