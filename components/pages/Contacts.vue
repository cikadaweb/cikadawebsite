<template>
  <div class="contacts">
    <AppBreadcrumb />
    <h1 class="contacts__title">Контакты</h1>
  </div>
</template>

<script>
import AppBreadcrumb from '@/components/breadcrumb/AppBreadcrumb.vue';

export default {
  components: {
    AppBreadcrumb
  }
}
</script>

<style lang="scss" scoped>
.contacts__title {
  @include font(44px, 700, 60px);
  margin: 0 0 40px;

  @include for-size(tablet) {
    @include font(30px, 700, 60px);
    margin-top: 35px;
  }
}
</style>
