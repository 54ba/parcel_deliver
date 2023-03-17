<template>
  <div :class="{'divider': true, 'vertical': vertical}"/>
</template>

<script>
export default {
  name: "Divider",
  props: {
    vertical: {
      type: Boolean,
      default: false,
    }
  }
}
</script>

<style scoped>
div.divider {
  @apply border-gray-250 border-b rounded w-full
}

div.vertical {
  @apply w-0 h-full border-b-0 border-r rounded-b-full
}
</style>
