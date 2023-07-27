<template>
  <header class="header">
    <div class="container">
      <div class="header__navigation">
        <NuxtLink class="header__logo" to="/">Logo</NuxtLink>

        <div>
          <div class="header__burger" :class="isShowMobileMenu ? 'header__burger_active' : ''" @click="toggleBurgerMenu">
            <span></span>
          </div>

          <nav class="menu__body" :class="isShowMobileMenu ? 'menu__body_active' : ''">

            <ul class="menu__list">
              <li
                v-for="navigationLink in navigationList"
                :key="navigationLink.title"
                @click="closeMobileMenu"
              >
                <nuxt-link
                  class="menu__link"
                  active-class="menu__link_active"
                  :to="navigationLink.to"
                >{{ navigationLink.title }}
                </nuxt-link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">

import Vue from 'vue'
export default Vue.extend({
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
            name: 'post',
          },
        },
        {
          title: 'Контакты',
          to: {
            name: 'contacts',
          },
        },
      ],
      isShowMobileMenu: false
    }
  },
  methods: {
    toggleBurgerMenu() {
      document.body.classList.toggle("body_lock");
      this.isShowMobileMenu = !this.isShowMobileMenu;
    },
    closeMobileMenu() {
      this.toggleBurgerMenu();
    }
  }
})
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  background-color: $white-color;
  min-height: 104px;
}
.header__navigation {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
}
.header__logo {
  z-index: 5;
  font-size: 0;
  overflow: hidden;
  text-decoration: none;
  width: 50px;
  height: 50px;
  background-image: url(@/assets/img/cikada-logo.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.header__burger {
  display: none;
}
.menu__list {
  list-style: none;
  display: flex;
  gap: 15px;
  flex: 1 0 auto;
  padding: 0;
  margin: 0;
}
.menu__link {
  @include font(20px, 500, 29px);
  color: $black-color;
  text-decoration: none;
  transition: all 0.3s ease 0s;
}

.menu__link:hover {
  color: $font-disabled;
}
.menu__link_active {
  text-decoration: underline;
}

@media (max-width: 767px) {
  .header__burger {
    z-index: 5;
    display: block;
    position: relative;
    width: 30px;
    height: 18px;
    cursor: pointer;
  }
  .header__burger span,
  .header__burger::before,
  .header__burger::after {
    left: 0;
    position: absolute;
    height: 10%;
    width: 100%;
    transition: all 0.3s ease 0s;
    background-color: $font-secondary;
  }
  .header__burger::before,
  .header__burger::after {
    content: '';
  }
  .header__burger::before {
    top: 0;
  }
  .header__burger::after {
    bottom: 0;
  }
  .header__burger span {
    top: 50%;
    transform: scale(1) translate(0px, -50%);
  }

  .header__burger .header__burger_active span{
    transform: scale(0) translate(0px, -50%);
  }
  .header__burger .header__burger_active::before {
    top: 50%;
    transform: rotate(-45deg) translate(0px, -50%);
  }
  .header__burger .header__burger_active::after {
    bottom: 50%;
    transform: rotate(45deg) translate(0px, 50%);
  }

  .menu__body {
    position: fixed;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.9);
    padding: 100px 30px 30px 30px;
    transition: left 0.3 ease 0s;
    overflow: auto;
    margin-top: 30px;
  }
  .menu__body.menu__body_active {
    left: 0;
  }

  .menu__body::before {
    content: '';
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    height: 104px;
    background-color: $white-color;
    z-index: 2;
    box-shadow: 0 2px 12px 0 rgb(0 0 0 / 30%);
  }
  .menu__list {
    flex-direction: column;
  }

  .menu__link {
    @include font(25px, 500, 29px);
    color: $white-color;
  }
}
</style>
