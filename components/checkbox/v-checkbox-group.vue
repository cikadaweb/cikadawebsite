<template>
  <div>
    <div v-for="option in options" :key="option.id">
      <v-checkbox
        :label="option.name"
        :id="option.id"
        :name="name"
        :value="option.name"
        :checked="value.includes(option.id)"
        group
        @updateCheckboxGroup="check"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import vCheckbox from '@/components/checkbox/v-checkbox.vue';

const emits = defineEmits(['input']);
const props = defineProps({
  value: {
    type: Array,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  options: {
    type: Array,
    required: true,
    validator: (value: any) => {
      const hasNameKey = value.every((option: any) => Object.keys(option).includes('name'))
      const hasIdKey = value.every((option: any) => Object.keys(option).includes('id'))
      return hasNameKey && hasIdKey
    }
  },
})

const check = (params: any) => {
  let updateValue = [...props.value]
  if (params.checked) {
    updateValue.push(params.optionId)
  } else {
    updateValue.splice(updateValue.indexOf(params.optionId), 1)
  }
  emits('input', updateValue)
}

</script>
