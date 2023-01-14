<template>
  <header class="header">
    <nav class="header__nav">
      <ul class="header__links">
        <li class="header__item">
          <nuxt-link class="header__link" to="/works">Works</nuxt-link>
        </li>
        <li class="header__item">
          <nuxt-link class="header__link" to="/blog">Blog</nuxt-link>
        </li>
        <li class="header__item">
          <nuxt-link class="header__link" to="/contact">Contact</nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
@import '@/assets/scss/_mixins.scss';
@import '@/assets/scss/_variables.scss';

.header {
  margin-bottom: 110px;
}

.header__nav {}

.header__links {
  display: flex;
  justify-content: end;
  padding: 0;
  margin: 0;
  margin: 30px -15px 0 -15px;
  list-style: none;
}

.header__item {
  padding: 0 15px;
}
.header__link {
  @include font(20px, 500, 29px);
  color: $black-color;
  text-decoration: none;
}
.header__link:hover {
  color: $blue-light-color1;
}
</style>
