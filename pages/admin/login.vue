<template>
  <div class="login">
    <form
      class="login__form"
      action="#"
      method="POST"
      @submit.prevent="loginUser"
    >
    <legend class="login__title">Авторизация</legend>

    <v-input
      label="* Логин"
      name="login"
      placeholder="Введите логин"
      width="100%"
      v-model:value="v$.login.$model"
      :error="v$.login.$errors"
    />

    <v-input
      label="* Пароль"
      name="password"
      placeholder="Введите пароль"
      width="100%"
      v-model:value="v$.password.$model"
      :error="v$.password.$errors"
    />

    <v-button
      label="Войти"
      color="login"
      size="medium"
      rounded
      type="button"
      icon="right-to-bracket"
    />

    </form>
  </div>
</template>

<script>
import vInput from '@/components/input/v-input.vue';
import vButton from '@/components/button/v-button.vue';

import useVuelidate from '@vuelidate/core';
import { helpers, minLength, email, maxLength } from '@vuelidate/validators';

import { computed, ref } from 'vue';

export default {
  layout: 'empty',
  setup() {
    const login = ref('');
    const password = ref('');

    const rules = computed(() => ({
      login: {
        email: helpers.withMessage('Вы ввели неверный email', email),
      },
      password: {
        minLength: helpers.withMessage('Минимальная длина: 3 символа', minLength(3))
      }
    }));

    const v$ = useVuelidate(rules, { login, password });

    const loginUser = async () => {
      try {
        v$.value.$touch();
        const formData = {
          login: this.user.email,
          password: this.user.password
        }
        await this.$store.dispatch('auth/login', formData);
        this.$router.push('/admin');

      } catch (e) {

      }
    }

    return {
      v$, login, password, loginUser
    }
  },
  components: { vInput, vButton }
}
</script>


<style lang="scss" scoped>
@import '@/assets/scss/_mixins.scss';
@import '@/assets/scss/_variables.scss';
.login {
  width: 500px;
  box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
  border-radius: 16px;
  padding: 15px;
}

.login__form {
  padding: 20px;
}

.login__title {
  @include font(30px, 700, 60px);
  margin-bottom: 20px;
}
</style>
