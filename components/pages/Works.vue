<template>
  <div class="works">
    <AppBreadcrumb />
    <h1 class="works__title">Работы</h1>
    <div class="works__row">
      <div class="works__column" v-for="work in works" :key="work.id">
        <AppWork :item="work" />
      </div>
    </div>
  </div>
</template>

<script>
import AppWork from '@/components/portfolio/AppWork.vue';
import AppBreadcrumb from '@/components/breadcrumb/AppBreadcrumb.vue';

export default {
  async fetch() {
    try {
      await this.$store.dispatch('works/fetchWorks');
    } catch (e) {
      console.error(e);
    }
  },
  computed: {
    works() {
      return this.$store.getters['works/getWorks'];
    }
  },
  components: {
    AppWork, AppBreadcrumb,
  }
}
</script>

<style lang="scss" scoped>
.works__title {
  @include font(44px, 700, 60px);
    margin: 0 0 40px;
  @include for-size(tablet) {
    @include font(30px, 700, 60px);
    margin-top: 35px;
  }
}

.works__row {
  display: flex;
  flex-direction: column;
  margin-bottom: 83px
}

.works__column {
  border-bottom: 1px solid $gray-light-color2;
  margin-bottom: 30px;
}
</style>
