<template>
  <div class="picture">
    <picture class="picture__container" :class="classNameContainer">
      <img class="picture__img" :class="classNameImage" :src="require(`@/assets/img/${imageUrl}`)" :alt="imageUrl">
    </picture>
  </div>
</template>

<script setup lang="ts">
import {
  defineProps,
} from 'vue';

interface IPropsPicture {
  imageUrl?: string,
  classNameContainer: string,
  classNameImage?: string,
}

const props = defineProps<IPropsPicture>();

</script>

<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';
@import '@/assets/scss/_mixins.scss';

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

.main__author__picture {
  padding-top: calc(243 / 243 * 100%);
}
.main__author__img {
  border-radius: 50%;
}

.work-card__picture {
  padding-top: calc(180 / 246 * 100%);
}
.work-card__img {
  border-radius: 6px;
}

.post__picture {
  padding-top: calc(460 / 681 * 100%);
}

.post__img {

}
</style>
