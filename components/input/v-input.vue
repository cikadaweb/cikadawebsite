<template>
  <div class="form-input" :style="{width: width}">
    <input
      class="input-text"
      :type="type"
      :name="name"
      :id="name"
      :placeholder="placeholder"
      :value="value"
      @input="updateValue($event)"
      >
    <label :for="name" class="input-label">{{ label }}</label>

    <TransitionGroup>
      <div
        class="form-error"
        v-for="element of error"
        :key="element.$uid">
        <div class="form-error__message">{{ element.$message }}</div>
      </div>
    </TransitionGroup>

  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['input']);

const props = defineProps({
  error: {
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

.form-input {
  margin: 30px 0;
  position: relative;
}

.form-error {
  background: $pink-color;
  margin-top: 4px;
  border-radius: 7px;
  font-size: 13px;
  color: #fff;
  padding: 5px;
}

.input-text {
  border: 1px solid $gray-light-color1;
  padding: 0 10px;
  height: 40px;
  border-radius: 7px;
  font-size: 15px;
  width: 100%;
  position: relative;
  z-index: 1;
}

.input-text:focus+.input-label {
  z-index: 1;
  opacity: 1;
  top: -20px;
}

.input-text:not(:placeholder-shown)+.input-label {
  z-index: 1;
  opacity: 1;
  top: -20px;
}

.input-label {
  font-weight: bold;
  display: block;
  position: absolute;
  top: 20px;
  opacity: 0;
  z-index: -1;
  transition: .3s;
  font-size: 13px;
  color: $blue-dark-color;
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
