<template>
  <div class="rounded-xl bg-white shadow border border-slate-200 outline-none p-3">
    <p class="text-gray-700 font-medium" v-if="!basic">
      <slot name="title">
        {{ title }}
      </slot>
    </p>

    <p class="text-gray-500 tracking-tight mb-2" v-if="!basic">
      <slot name="description">
        {{ description }}
      </slot>
    </p>

    <slot/>
  </div>
</template>

<script>
export default {
  name: "DropdownMenu",
  props: {
    title: String,
    description: String,
    basic: {
      type: Boolean,
      default: false,
    }
  }
}
</script>

<style scoped>

</style>
