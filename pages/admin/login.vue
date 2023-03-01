<template>
  <div class="login">
    <form
      class="login__form"
      action="#"
      method="POST"
      @submit.prevent="loginUser"
    >
    <legend class="login__title">Авторизация</legend>

    <div class="login__field">
      <label class="login__label" for="email">Логин</label>
      <input class="login__input" v-model="user.email" id="email" type="email" placeholder="Введите ваш email">
    </div>

    <div class="login__field">
      <label class="login__label" for="password">Пароль</label>
      <input class="login__input" v-model="user.password" id="password" type="password" placeholder="Введите ваш пароль">
    </div>

    <button class="button login__button" type="submit">
      Войти
    </button>

    </form>
  </div>
</template>

<script>
export default {
  layout: 'empty',
  data() {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    async loginUser() {
      try {
        const formData = {
          login: this.user.email,
          password: this.user.password
        }
        await this.$store.dispatch('auth/login', formData);
        this.$router.push('/admin'); 

      } catch (e) {

      }
    }
  }
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

.login__field+.login__field {
  margin-top: 20px;
}

.login__label {
  display: block;
  color: $gray-light-color1;
  margin-bottom: 5px;
}

.login__input {
 @include input-reset;
}

.login__input {
  width: 100%;
  padding: 10px;
  border-radius: 6px;
  border: 2px solid $gray-light-color2;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
}

.login__input:focus {
  outline: 2px solid $blue-light-color1;
  outline-offset: 1px;
}

.login__button {
  @include font(20px, 500, 1.2);
  padding: 10px 20px;
  border: 2px solid $blue-dark-color;
  border-radius: 16px;
  margin: 30px auto 0;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
}

.login__button:hover {
  background-color: $blue-dark-color;
  color: $white-color;
}
</style>
