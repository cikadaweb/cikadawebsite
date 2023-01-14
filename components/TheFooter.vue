<template>
  <footer class="footer">
    <ul class="footer__links">
      <li class="header__item">
        <router-link to="/" class="header__link header__link_github">GitHub</router-link>
      </li>
      <li class="header__item">
        <router-link to="/" class="header__link header__link_linkedin">Linkedin</router-link>
      </li>
      <li class="header__item">
        <router-link to="/" class="header__link header__link_vk">Vk</router-link>
      </li>
      <li class="header__item">
        <router-link to="/" class="header__link header__link_telegram">Telegram</router-link>
      </li>
    </ul>
    <div class="footer__copyright">
      Copyright ©2020 All rights reserved
    </div>
  </footer>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
@import '@/assets/scss/_mixins.scss';
@import '@/assets/scss/_variables.scss';

.footer {

}
.footer__links {
  display: flex;
  justify-content: center;
  padding: 0;
  margin: 0;
  margin: 0 -15px;
  margin-bottom: 30px;
  list-style-type: none;
}
.header__item {
  padding: 0 15px;
}
.header__link {
  display: block;
  width: 30px;
  height: 30px;
  font-size: 0;
  overflow: hidden;
  text-decoration: none;
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
}
.header__link_github {
  background-image: url('../assets/img/social/github.svg');
}
.header__link_linkedin {
  background-image: url('../assets/img/social/linkedin.svg');
}
.header__link_vk {
  background-image: url('../assets/img/social/vk.svg');
}
.header__link_telegram {
  background-image: url('../assets/img/social/telegram.svg');
}
.footer__copyright {
  @include font(14px, 400, 21px);
  color: $blue-dark-color;
  text-align: center;
  margin-bottom: 50px;
}
</style>
