<template>
  <nav class="breadcrumb">
    <ul class="breadcrumb__list">
      <li class="breadcrumb__item" v-for="link in breadcrumbs" :key="link.id">
        <nuxt-link class="breadcrumb__link" :to="`${link.url}`" >{{ link.title }}</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { PropType } from 'vue';

interface IBreadcrumb {
  id: number,
  title: string,
  url: string,
}

defineProps({
  breadcrumbs: {
    type: Array as PropType<IBreadcrumb[]>,
    required: true,
  },
});
</script>

<style lang="scss">

.breadcrumb__list {
  display: flex;
  padding: 0;
  margin: 0;
  list-style: none;
}

.breadcrumb__item {
  @include font(16px, 400, 1.2);
}

.breadcrumb__item::after {
  content: ' / ';
  margin: 0 2px;
}

.breadcrumb__item:last-child::after {
  content: '';
}

.breadcrumb__link {
  color: $font-primary;
  text-decoration: none;
  transition: all 0.3s ease;
}

.breadcrumb__link:hover {
  color: $font-gray;
}
</style>
