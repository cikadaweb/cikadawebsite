<template>
  <div class="picture">
    <picture class="picture__container" :style="{paddingTop: paddingTop}">
      <img
        :class="[
          'picture__img',
          `${imgBorder}`,
        ]"
        :src="require(`@/assets/img/${imgSrc}`)"
        :alt="imgSrc"
      >
    </picture>
  </div>
</template>

<script setup lang="ts">
import {
  defineProps, computed
} from 'vue';

interface IProps {
  imgSrc?: string,
  height: number,
  width: number,
  border?: string,
}

const props = defineProps<IProps>();

const paddingTop = computed(() => {
  return `${props.height / props.width * 100}%`;
});

const imgBorder = computed(() => {
  switch(props.border) {
    case 'rounded-circle':
      return 'picture__img_rounded-circle';
      break;
    case 'rounded':
      return 'picture__img_rounded';
      break;
    default:
      return 'picture__img_rounded-0'
  }
});

</script>

<style lang="scss" scoped>

.picture__container {
  position: relative;
  display: block;
}

.picture__img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.picture__img_rounded-circle {
  border-radius: 50%;
}

.picture__img_rounded {
  border-radius: 6px;
}

.picture__img_picture__img_rounded-0 {
  border-radius: 0;
}
</style>
