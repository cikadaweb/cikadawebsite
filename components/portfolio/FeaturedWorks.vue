<template>
  <div class="featured-works">

    <div class="featured-works__flag">

    </div>

    <div class="featured-works__title">
      Портфолио
    </div>

    <div class="featured-works__row">
      <div class="featured-works__column" v-for="work in works" :key="work.id">
        <AppWork :item="work"/>
      </div>
    </div>
  </div>
</template>

<script>
import AppWork from '@/components/portfolio/AppWork.vue';

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
    AppWork,
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_mixins.scss';
@import '@/assets/scss/_variables.scss';
.featured-works {
  padding-bottom: 18px;
}
.featured-works__flag { //ToDo
  width: 11px;
  height: 36px;
  left: 149px;
  top: 991px;
  background: $gray-color;
}
.featured-works__title {
  @include font(22px, 400, 60px);
  color: $blue-dark-color;
  margin-bottom: 20px;
  @include for-size(tablet) {
    text-align: center;
  }
}
.featured-works__row {
  display: flex;
  flex-direction: column;
  margin-bottom: 83px
}
.featured-works__column {
  border-bottom: 1px solid $gray-light-color2;
  margin-bottom: 30px;
}
.featured-works__column:last-child {
  margin-bottom: 0;
}
</style>
