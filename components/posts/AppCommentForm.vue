<template>
  <form
    class="comment-form"
    action="#"
    method="POST"
    @submit.prevent="submitForm"
  >
    <h3 class="comment-form__title">Добавить комментарий</h3>

    <v-input
      label="* Ваше имя"
      name="name"
      placeholder="Введите имя"
      width="100%"
      v-model:value="v.commentAuthor.$model"
      :error="v.commentAuthor.$errors"
    />

    <v-textarea
      label="* Текст сообщения"
      name="text"
      placeholder="Введите текст комментария"
      v-model:value="v.commentText.$model"
      :error="v.commentText.$errors"
    />

    <v-button
      label="Добавить комментарий"
      color="primary"
      size="medium"
      rounded
      type="submit"
      icon="pen-to-square"
      @click="handleClick"
    />

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
import vCheckboxGroup from '@/components/checkbox/v-checkbox-group.vue';
import vInput from '@/components/input/v-input.vue';
import vTextarea from '@/components/input/v-textarea.vue';
import vButton from '@/components/button/v-button.vue';

import useVuelidate from '@vuelidate/core';
import { helpers, minLength, maxLength } from '@vuelidate/validators';

import {
  computed,
  defineProps, PropType, ref
} from 'vue';

// const isAgree = ref(false);

// const listOfHeroes = ref([
//   { name: 'Spider Man', id: 'h1' },
//   { name: 'Batman', id: 'h2' },
//   { name: 'Tor', id: 'h3' },
//   { name: 'Loki', id: 'h4' },
// ]);

// const selectedHeroes = ref(['h1', 'h3']);

const commentAuthor = ref('');
const commentText = ref('');

const submitForm = () => {
  const formData = {
    commentAuthor: commentAuthor.value,
    commentText: commentText.value,
  }
  console.log('submitForm: ', formData);
}

const rules = computed(() => ({
  commentAuthor: {
    minLength: helpers.withMessage('Минимальная длина: 3 символа', minLength(3))
  },
  commentText: {
    minLength: helpers.withMessage('Минимальная длина: 10 символов', minLength(10)),
    maxLength: helpers.withMessage('Максимальная длина: 100 символов', maxLength(100))
  },
}));

const v = useVuelidate(rules, { commentAuthor, commentText });

const handleClick = () => {
  console.log('Press Button');
}

</script>

<style lang="scss" scoped>
.comment-form {
  margin-bottom: 30px;
}

.comment-form__title {
  @include font(25px, 700, 24px);
  margin: 0 0 50px;
}

</style>
