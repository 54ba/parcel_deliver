<template>
  <teleport to="#index">
    <transition class="fade-in">
      <div class="z-20 absolute top-0 left-0 bottom-0 right-0 bg-black bg-opacity-70" v-if="visible" />
    </transition>
  </teleport>
</template>

<script>
export default {
  name: "Backdrop",
  props: ["visible"],
}
</script>

<style scoped></style>
