<template>
  <nav class="aside-nav">
    <ul class="aside-nav__list">
      <li class="aside-nav__item">
        <nuxt-link class="aside-nav__link" exact active-class="aside-nav__link_active" to="/admin">
          <font-awesome-icon class="aside-nav__icon" :icon="['fas', 'clock']" />Аналитика
        </nuxt-link>
      </li>
      <li class="aside-nav__item">
        <nuxt-link class="aside-nav__link" active-class="aside-nav__link_active" to="/admin/create">
          <font-awesome-icon class="aside-nav__icon" :icon="['fas', 'clock']" />Создать
        </nuxt-link>
      </li>
      <li class="aside-nav__item">
        <nuxt-link class="aside-nav__link" active-class="aside-nav__link_active" to="/admin/list">
          <font-awesome-icon class="aside-nav__icon" :icon="['fas', 'clock']" />Посты
        </nuxt-link>
      </li>
      <li class="aside-nav__item">
        <nuxt-link class="aside-nav__link" active-class="aside-nav__link_active" to="/admin/user">
          <font-awesome-icon class="aside-nav__icon" :icon="['fas', 'clock']" />Пользователи
        </nuxt-link>
      </li>
      <li class="aside-nav__item">
        <nuxt-link class="aside-nav__link" active-class="aside-nav__link_active" to="/admin/logout">
          <font-awesome-icon class="aside-nav__icon" :icon="['fas', 'clock']" />Выйти
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
@import '@/assets/scss/_mixins.scss';
@import '@/assets/scss/_variables.scss';
.aside-nav {
}

.aside-nav__list {
  padding: 0;
  margin: 0;
  list-style: none;
}

.aside-nav__item {
  padding: 15px 0;
}

.aside-nav__link {
  @include font(20px, 500, 29px);
  color: $black-color;
  text-decoration: none;
  text-transform: uppercase;
}

.aside-nav__link_active {
  color: $blue-light-color1;
}

.aside-nav__icon {
  margin-right: 5px;
}
</style>
