<template>
  <header class="header">
    <nav class="header__nav">

      <nuxt-link class="header__logo" to="/">Logo</nuxt-link>

      <ul class="header__links header__links_desktop">
        <li class="header__item" v-for="navigationLink in navigationList" :key="navigationLink.title">
          <nuxt-link class="header__link" active-class="header__item_active" :to="navigationLink.to">{{ navigationLink.title }}</nuxt-link>
        </li>
      </ul>

      <MobileMenu :navigationList="navigationList"/>

    </nav>
  </header>
</template>

<script lang="ts">
import MobileMenu from '@/components/header/MobileMenu.vue';

import Vue from 'vue'
export default Vue.extend({
  components: {
    MobileMenu
  },
  data() {
    return {
      navigationList: [
        {
          title: 'Мои работы',
          to: {
            name: 'works',
          },
        },
        {
          title: 'Блог',
          to: {
            name: 'blog',
          },
        },
        {
          title: 'Контакты',
          to: {
            name: 'contacts',
          },
        },
      ],
    }
  }
})
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_mixins.scss';
@import '@/assets/scss/_variables.scss';

.header {
  margin-bottom: 110px;
}

.header__nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 30px;
}

.header__logo {
  font-size: 0;
  overflow: hidden;
  text-decoration: none;
  width: 50px;
  height: 50px;
  background-image: url(../../assets/img/cikada-logo.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.header__links {
  padding: 0;
  margin: 0 -15px;
  list-style: none;
}
.header__item {
  padding: 0 15px;
}

.header__links_desktop {
  display: flex;
  justify-content: end;
  @include for-size(tablet) {
    display: none;
  }
}

.header__link {
  @include font(20px, 500, 29px);
  color: $black-color;
  text-decoration: none;
}

.header__link:hover {
  color: #6a6e99;
}
.header__item_active {
  text-decoration: underline !important;
}

</style>
