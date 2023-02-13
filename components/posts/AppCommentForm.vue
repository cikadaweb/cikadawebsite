<template>
  <div class="comment-form">
    <div>Добавить комментарий</div>
    <form action="#" method="POST" @submit.prevent="postComment">
      
    </form>
  </div>
</template>

<script setup lang="ts">

import {
  defineProps, PropType,
} from 'vue';

const postComment = () => {
  console.log('postComment: ');
}

</script>

<style lang="scss" scoped>
@import '@/assets/scss/_mixins.scss';
@import '@/assets/scss/_variables.scss';

</style>
