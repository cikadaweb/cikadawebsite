<template>
  <div class="works">
    <h1 class="works__title">Работы</h1>
    <div class="works__row">
      <div class="works__column" v-for="work in works" :key="work.id">
        <AppWork :item="work" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
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
  }
})
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_mixins.scss';
@import '@/assets/scss/_variables.scss';

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
