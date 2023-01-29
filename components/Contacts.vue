<template>
  <div class="contacts">
    <h1 class="contacts__title">Контакты</h1>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
})
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_mixins.scss';
@import '@/assets/scss/_variables.scss';

.contacts__title {
  @include font(44px, 700, 60px);
  margin: 0 0 40px;

  @include for-size(tablet) {
    @include font(30px, 700, 60px);
    margin-top: 35px;
  }
}
</style>
