<template>
  <button
      :class="[
        'btn',
        `btn_${color}`,
        `${buttonSize}`,
        { 'btn_rounded': rounded },
        { 'btn_outlined': outlined },
      ]"
      :disabled="disabled"
      @click="clickOnButton"
  ><slot/><fa class="btn__icon" :icon="`${icon}`" />
  </button>
</template>

<script setup lang="ts">
import {computed} from "vue";

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

const buttonSize = computed(() => {
  switch(props.size) {
    case 'large':
      return 'btn_large';
      break;
    case 'small':
      return 'btn_small';
      break;
    default:
      return 'btn_medium'
  }
});
const clickOnButton = () => {
  emit('click')
};
</script>

<style lang="scss" scoped>

.btn {
  @include button-reset;
}

.btn {
  color: $font-white;
  border-radius: 2px;
  transition: .2s;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
}

.btn_primary {
  background-color: $btn-primary-default;
  border: 2px solid $btn-primary-default;
  &:focus {
    border: 2px solid $btn-primary-hover;
    outline: none;
  }
}

.btn_primary:enabled:hover {
  background: $btn-primary-hover;
}

.btn_secondary {
  background-color: $btn-secondary-default;
  border: 2px solid $btn-secondary-default;
  &:focus {
    border: 2px solid $btn-secondary-hover;
    outline: none;
  }
}

.btn_secondary:enabled:hover {
  background: $btn-secondary-hover;
}

.btn_medium {
  @include font(16px, 500, 24px);
  padding: 13px 20px;
}

.btn_large {
  @include font(20px, 500, 29px);
  padding: 17px 20px;
}

.btn_rounded {
  border-radius: 16px;
}

.btn_outlined {
  background: transparent;
  color: #000;
}

.btn_outlined:hover {
  color: $font-white;
}

.btn:disabled {
  opacity: .6;
  cursor: default;
}

.btn__icon {
  vertical-align: middle;
  width: 15px;
  height: 20px;
  margin-left: 10px;
}

// Перенести
.btn_login {
  color: $font-primary;
  border: 1px solid $border-default;
}
.btn_login:hover {
  background-color: $bg-secondary;
  color: $font-white;
}
</style>
