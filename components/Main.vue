<template>
  <div class="main">
    <div class="main__author">
      <div class="main__author-info">
        <h1 class="main__author-name">Hi, I am Adel,
          Frontend Developer
        </h1>
        <div class="main__author-text">
          I am engaged in website development. Websites for your products, services and business.
        </div>
        <button class="button main__author-button" type="button">Download Resume</button>
      </div>
      <div class="main__author__img">
          <v-picture :classNameContainer="'main__author__picture'" :classNameImage="'main__author__img'" :imageUrl="'cikada.jpg'" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/_mixins.scss';
@import '@/assets/scss/_variables.scss';

.main {
  border-top: 34px solid $gray-color;
  margin-bottom: 71px;
}
.main__author {
  display: flex;
}

.main__author-info {
  width: calc(100% / 10) * 7;
}
.main__author__img {
  width: calc(100% / 10) * 3;
}
.main__author-name {
  @include font(44px, 700, 60px);
  color: $blue-dark-color;
  margin: 0;
  margin-bottom: 40px;
  max-width: 416px;
}
.main__author-text {
  @include font(16px, 400, 24px);
  color: $blue-dark-color;
  margin-bottom: 50px;
  max-width: 416px;
}
.main__author-button {
  @include font(20px, 500, 29px);
  padding: 17px 20px;
  border-radius: 2px;
  color: $white-color;
  background-color: $pink-color;
}
</style>
