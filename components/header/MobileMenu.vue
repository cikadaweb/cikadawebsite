<template>
  <button class="button header__button" @click="toggleMobileMenu">
    <span class="header__button-line"></span>
    <span class="header__button-line"></span>
    <span class="header__button-line"></span>

    <div class="header__mobile-menu" v-if="isShowMobileMenu">
      <ul class="header__links header__links_mobile">
        <li class="header__item" v-for="navigationLink in navigationList" :key="navigationLink.title">
          <nuxt-link class="header__link" active-class="header__item_active" :to="navigationLink.to.name">{{
            navigationLink.title
          }}</nuxt-link>
        </li>
      </ul>
    </div>
  </button>
</template>

<script setup lang="ts">
import { ref, defineProps, PropType } from 'vue';

interface IPropLinkTo {
  name: string,
}

interface IPropsLink {
  title: string,
  to: IPropLinkTo,
}

const props = defineProps({
  navigationList: {
    type: Array as PropType<IPropsLink>,
    required: true,
  },
});

const isShowMobileMenu = ref(false);

const toggleMobileMenu = () => {
  isShowMobileMenu.value = !isShowMobileMenu.value;
}

</script>

<style lang="scss" scoped>
.header__button {
  display: none;
  flex-grow: 1;
  position: relative;
  width: 30px;
  height: 18px;

  @include for-size(tablet) {
    max-width: 30px;
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
  top: 40px;
  right: 0;
  z-index: 10;
  width: 300px;
  height: 200px;
  background-color: $gray-light-color1;
  border-radius: 16px;
}

.header__links {
  padding: 0;
  margin: 0;
  list-style: none;
}

.header__item {
  padding: 10px 15px;
  text-align: left;
}
.header__item:first-child {
  margin-top: 15px;
}
.header__item:hover {
  background-color: $gray-light-color2;
}

.header__links_mobile {
  display: none;

  @include for-size(tablet) {
    display: flex;
    flex-direction: column;
  }
}

.header__link {
  @include font(22px, 500, 29px);
  color: $black-color;
  text-decoration: none;
}

.header__link:hover {

}

.header__item_active {

}
</style>
