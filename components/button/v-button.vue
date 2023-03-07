<template>
  <button
      :class="[
        'btn',
        `btn_${color}`,
        { 'btn_rounded': rounded },
        { 'btn_outlined': outlined },
        { 'btn_icon': icon },
        { 'btn_medium': size === 'medium' },
        { 'btn_large': size === 'large' }
      ]"
      :disabled="disabled"
      @click="clickOnButton">
    <font-awesome-icon :icon="`fa-regular fa-${icon}`" />
    <span>{{ label }}</span>
  </button>
</template>

<script setup lang="ts">
const props = defineProps({
  label: {
    type: String,
    default: 'Button'
  },
  color: {
    type: String,
    default: 'primary'
  },
  disabled: {
    type: Boolean,
    required: false
  },
  rounded: {
    type: Boolean,
    required: false
  },
  outlined: {
    type: Boolean,
    required: false
  },
  icon: {
    type: String,
    required: false
  },
  size: {
    type: String,
    default: 'normal'
  },
  type: {
    type: String,
    default: 'button',
  }
});

const emit = defineEmits(['click']);

const clickOnButton = () => {
  emit('click')
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_mixins.scss';
@import '@/assets/scss/_variables.scss';

.btn {
  @include button-reset;
}
.btn {
  color: $white-color;
  border-radius: 2px;
  transition: .2s;
}

.btn_primary {
  background: $pink-color;
  border: 1px solid $pink-color;
}

.btn_primary:enabled:hover {
  background: $pink-light-color;
}

.btn:disabled {
  opacity: .6;
  cursor: default;
}

.btn_rounded {
  border-radius: 16px;
}

.btn_outlined {
  background: transparent;
  color: #000;
}

.btn_outlined:hover {
  color: $white-color;
}

.btn_icon { // ToDo
  // padding: 0;
  // width: 40px;
  // height: 40px;
  // border-radius: 50%;
}

.btn_medium {
  @include font(16px, 400, 24px);
  padding: 17px 20px;
}

.btn_large {
  @include font(20px, 500, 29px);
  padding: 17px 20px;
}
</style>
