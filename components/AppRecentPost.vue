<template>
  <div class="recent-post" :class="isBlogPage ? 'recent-post_page' : ''">
    <div class="recent-post__header">
      <h2 class="recent-post__title">
        {{ item.title }}
      </h2>
      <div class="recent-post__info">
        <div class="recent-post__info-date">
          {{ item.publish_date }}
        </div>
        <div class="recent-post__info-tag">
          {{ item.tag }}
        </div>
      </div>
    </div>
    <div class="recent-post__body">
      <div class="recent-post__text">
        {{ item.text }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  defineProps, PropType,
} from 'vue';

interface IPropsPost {
  id: number,
  title: string,
  publish_date: string,
  tag: string,
  text: string,
}

const props = defineProps({
  item: {
    type: Object as PropType<IPropsPost>,
    required: true,
  },
  isBlogPage: {
    type: Boolean,
    required: false
  }
});

</script>

<style lang="scss" scoped>
@import '@/assets/scss/_mixins.scss';
@import '@/assets/scss/_variables.scss';
.recent-post {
  display: flex;
  flex-direction: column;
  height: 100%;
  background: $white-color;
  padding: 25px;
  box-shadow: 0px 4px 10px rgba(187, 225, 250, 0.25);
  border-radius: 4px;
}

.recent-post_page {
  padding: 0 0 30px;
  border-bottom: 1px solid $gray-light-color2;
  margin-bottom: 30px;
  box-shadow: none;
}
.recent-post__header {
}
.recent-post__body {

}
.recent-post__title {
  @include font(26px, 700, 38px);
  margin: 0 0 20px;
  @include for-size(tablet) {
    @include font(22px, 700, 30px);
  }
}
.recent-post__info {
  @include font(18px, 400, 26px);
  display: flex;
  margin-bottom: 10px;
  @include for-size(tablet) {
    @include font(16px, 400, 24px);
  }
}
.recent-post__info-date {
  padding-right: 20px;
  border-right: 1px solid $black-color;
}
.recent-post__info-tag {
  padding-left: 20px;
  border-right: 1px solid transparent;
}
.recent-post__text {
  @include font(16px, 400, 24px);
}
</style>
