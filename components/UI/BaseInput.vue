<template>
  <div class="input" :style="{width: width}">
    <input
      class="input__text"
      :type="type"
      :name="name"
      :id="name"
      :placeholder="placeholder"
      :value="value"
      @input="updateValue($event)"
      >
    <label :for="name" class="input__label">{{ label }}</label>

    <TransitionGroup>
      <div
        class="input__error"
        v-for="error of errors"
        :key="error.$uid">
        {{ error.$message }}
      </div>
    </TransitionGroup>

  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['input']);

const props = defineProps({
  errors: {
    type: Array,
    required: false,
  },
  value: {
    type: String,
    default: '',
  },
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: 'text',
  },
  placeholder: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  width: {
    type: String,
    default: '300px',
  }
});

const updateValue = (e: any) => {
  emit('input', e.target.value)
}
</script>

<style lang="scss" scoped>

.input {
  position: relative;
}

.input__error {
  @include font(13px, 500, 1.2);
  color: $font-error;
  padding: 3px 0;
  border-radius: 7px;
  margin-top: 4px;
}

.input__text {
  @include font(16px, 400, 1.2);
  width: 100%;
  position: relative;
  z-index: 1;
  height: 40px;
  padding: 0 10px;
  border: 1px solid $border-gray;
  border-radius: 7px;

  &:focus {
    border: 2px solid $border-default;
    outline: none;
  }
}

.input__text:focus+.input__label {
  z-index: 1;
  opacity: 1;
  top: -20px;
}

.input__text:not(:placeholder-shown)+.input__label {
  z-index: 1;
  opacity: 1;
  top: -20px;
}

.input__label {
  @include font(13px, 700, 1.2);
  color: $font-primary;
  display: block;
  position: absolute;
  top: 20px;
  opacity: 0;
  z-index: -1;
  transition: .3s;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
