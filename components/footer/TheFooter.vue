<template>
  <footer class="footer">
    <ul class="footer__links">
      <li class="header__item">
        <a href="https://github.com/GAAdel" target="_blank" class="header__link header__link_github">GitHub</a>
      </li>
      <li class="header__item">
        <a href="https://www.linkedin.com/in/cikada/" target="_blank" class="header__link header__link_linkedin">Linkedin</a>
      </li>
      <li class="header__item">
        <a href="" class="header__link header__link_vk" target="_blank">Vk</a>
      </li>
      <li class="header__item">
        <a href="#" class="header__link header__link_telegram" target="_blank">Telegram</a>
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
.footer {
  padding-top: 50px;
  padding-bottom: 50px;
}
.footer__links {
  display: flex;
  justify-content: center;
  padding: 0;
  margin: 0;
  margin: 0 -15px 30px;
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
  background-image: url('../../assets/img/social/github.svg');
}
.header__link_linkedin {
  background-image: url('../../assets/img/social/linkedin.svg');
}
.header__link_vk {
  background-image: url('../../assets/img/social/vk.svg');
}
.header__link_telegram {
  background-image: url('../../assets/img/social/telegram.svg');
}
.footer__copyright {
  @include font(14px, 400, 21px);
  color: $blue-dark-color;
  text-align: center;
  margin-bottom: 50px;
}
</style>
