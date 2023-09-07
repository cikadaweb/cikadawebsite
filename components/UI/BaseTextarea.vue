<template>
  <div class="textarea">
    <textarea
      class="textarea__text"
      :type="type"
      :name="name"
      :id="name"
      :placeholder="placeholder"
      @input="updateValue($event)"
    ></textarea>

    <label class="textarea__label" :for="name" >{{ label }}</label>

    <TransitionGroup class="textarea__error-container">
      <div
        class="textarea__error"
        v-for="element of error"
        :key="element.$uid">
        {{ element.$message }}
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
});

const updateValue = (e: any) => {
  emit('input', e.target.value)
}

</script>

<style lang="scss" scoped>
.textarea {
  position: relative;
}

.input__error-container {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}

.textarea__error {
  @include font(13px, 500, 1.2);
  color: $font-error;
  padding: 3px 0;
  border-radius: 7px;
  margin-top: 4px;
}

.textarea__text {
  @include font(16px, 400, 24px);
  position: relative;
  z-index: 1;
  width: 100%;
  height: 200px;
  padding: 15px 10px;
  border: 1px solid $border-gray;
  border-radius: 7px;
  resize: none;

  &:focus {
    border: 2px solid $border-default;
    outline: none;
  }
}

.textarea__text:focus+.textarea__label {
  z-index: 1;
  opacity: 1;
  top: -25px;
}

.textarea__text:focus:not(:placeholder-shown)+.textarea__label {
  z-index: 1;
  opacity: 1;
  top: -25px;
}

.textarea__label {
  @include font(13px, 700, 1.2);
  display: block;
  color: $font-primary;
  position: absolute;
  top: 25px;
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
