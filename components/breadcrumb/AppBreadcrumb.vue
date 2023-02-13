<template>
  <nav class="breadcrumb">
    <ul class="breadcrumb__list">
      <li class="breadcrumb__item">
        <nuxt-link class="breadcrumb__link" to="/" >Главная</nuxt-link>
      </li>
      <li class="breadcrumb__item">
        <nuxt-link class="breadcrumb__link" to="/">Каталог</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">

import { defineProps, toRefs } from 'vue';

</script>

<style lang="scss">
@import '@/assets/scss/_mixins.scss';
@import '@/assets/scss/_variables.scss';


.breadcrumb {
  margin-bottom: 20px;
}

.breadcrumb__list {
  display: flex;
  padding: 0 0;
  margin: 0 0;
  list-style: none;
}

.breadcrumb__item {
  @include font(14px, 400, 140%);
}

.breadcrumb__item::after {
  content: '/';
  margin: 0 2px;
}

.breadcrumb__item:last-child::after {
  content: '';
}

.breadcrumb__link {
  color: inherit;
  text-decoration: none;
}

.breadcrumb__link:hover {
  text-decoration: underline;
}
</style>
