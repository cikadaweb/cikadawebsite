<template>
  <form
    class="comment-form"
    action="#"
    method="POST"
    @submit.prevent="postComment"
  >
    <!-- <v-checkbox
      label="Согласен на обработку"
      id="isAgree"
      name="isAgree"
      v-model="isAgree"
    />

    <v-checkbox-group v-model="selectedHeroes" name="'heroes'" :options="listOfHeroes" /> -->

  </form>
</template>

<script setup lang="ts">
import vCheckbox from '@/components/checkbox/v-checkbox.vue';
import vCheckboxGroup from '~/components/checkbox/v-checkbox-group.vue';

import {
  defineProps, PropType, ref
} from 'vue';

const postComment = () => {
  console.log('postComment: ');
}

const isAgree = ref(false);

const listOfHeroes = ref([
  { name: 'Spider Man', id: 'h1' },
  { name: 'Batman', id: 'h2' },
  { name: 'Tor', id: 'h3' },
  { name: 'Loki', id: 'h4' },
]);

const selectedHeroes = ref(['h1', 'h3']);

</script>

<style lang="scss" scoped>
@import '@/assets/scss/_mixins.scss';
@import '@/assets/scss/_variables.scss';

.comment-form {
  margin-bottom: 200px;
}
</style>
