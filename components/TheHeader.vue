<template>
  <header class="header">
    <nav class="header__nav">

      <ul class="header__links header__links_desktop">
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

      <button class="button header__button" @click="toggleMobileMenu">
        <span class="header__button-line"></span>
        <span class="header__button-line"></span>
        <span class="header__button-line"></span>

        <div class="header__mobile-menu" v-if="isShowMobileMenu">
          <ul class="header__links header__links_mobile">
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
        </div>
      </button>

    </nav>
  </header>
</template>

<script setup lang="ts">
import {ref } from 'vue';

const isShowMobileMenu = ref(false);

const toggleMobileMenu = () => {
  isShowMobileMenu.value = !isShowMobileMenu.value;
}

</script>

<style lang="scss" scoped>
@import '@/assets/scss/_mixins.scss';
@import '@/assets/scss/_variables.scss';

.header {
  margin-bottom: 110px;
}

.header__nav {
  padding-top: 30px;
  @include for-size(tablet) {
    display: flex;
    justify-content: flex-end;
  }
}

.header__links {
  padding: 0;
  margin: 0;
  margin: 0 -15px;
  list-style: none;
}

.header__links_desktop {
  display: flex;
  justify-content: end;
  @include for-size(tablet) {
    display: none;
  }
}

.header__links_mobile {
  display: none;

  @include for-size(tablet) {
    display: flex;
    flex-direction: column;
  }
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
.header__button {
  display: none;
  position: relative;
  width: 30px;
  height: 18px;
  @include for-size(tablet) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
}
.header__button-line {
  width: 30px;
  height: 2px;
  background-color: $blue-dark-color;
}

.header__mobile-menu {
  position: absolute;
  top: 30px;
  right: 0;
  z-index: 10;
  width: 200px;
  height: 200px;
  background-color: gray;
  border-radius: 16px;
}
</style>
