<template>
  <div class="contacts">
    <AppBreadcrumb :breadcrumbs="breadcrumbs"/>
    <h1 class="contacts__title">Контакты</h1>
  </div>
</template>

<script>
import AppBreadcrumb from '~/components/UI/BaseBreadcrumb.vue';

export default {
  components: {
    AppBreadcrumb
  },
  data() {
    return {
      breadcrumbs: [
        {
          id: 1,
          title: 'Главная',
          url: '/'
        },
        {
          id: 2,
          title: 'Контакты',
          url: '/contacts'
        },
      ]
    }
  },
}
</script>

<style lang="scss" scoped>

.contacts {
  padding-top: 114px;
}

.contacts__title {
  @include font(44px, 700, 60px);
  margin: 0 0 40px;

  @include for-size(tablet) {
    @include font(30px, 700, 60px);
    margin-top: 35px;
  }
}
</style>
