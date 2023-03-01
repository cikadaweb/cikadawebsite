<template>
  <div class="admin-layout">
    <div class="admin-layout__container">
      <aside class="admin-layout__aside">
        <AsideNav />
      </aside>
      <main class="admin-layout__main">
        <Nuxt />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import AsideNav from '@/components/admin/AsideNav.vue';

</script>

<style lang="scss" scoped>
@import '@/assets/scss/_mixins.scss';
@import '@/assets/scss/_variables.scss';
.admin-layout {
  width: 100%;
  height: 100vh;
}
.admin-layout__container{
  display: flex;
  height: 100%  ;
}
.admin-layout__aside {
  width: 20%;
  padding: 25px;
  border: 3px solid green;
}

.admin-layout__main {
  width: 80%;
  padding: 25px;
  border: 3px solid blue;
}
</style>
