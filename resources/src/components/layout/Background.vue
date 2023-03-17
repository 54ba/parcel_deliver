<template>
  <div class="relative bg-gray-100 bg-opacity-60 mt-5 p-5 pb-0 rounded-t-5xl yeet">
    <slot/>
  </div>
</template>

<script>
export default {
  name: "Background"
}
</script>

<style scoped>
.yeet {
  height: min-content;
}
</style>
