<template>
  <base-field v-bind="$props">
    <input
        :placeholder="placeholder" class="outline-none"
        :value="modelValue" @input="$emit('update:modelValue', $event.target.value)"
    />
  </base-field>
</template>

<script>

import BaseField from "../../components/form/BaseField.vue";

export default {
  name: "TextField",
  components: {BaseField},
  props: {
    modelValue: String,
    placeholder: String
  },
  extends: BaseField,
  emits: ['update:modelValue']
}
</script>

<style scoped>
div.field-invalid input {
  @apply placeholder-red-500

}
</style>
