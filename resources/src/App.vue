<template>
  <div class="h-full flex flex-col">
    <AppBar />
    <div id="container"
      :class="{ 'relative h-full flex flex-col p-5 pb-0': true, [$route.meta.backgroundClass || '']: true }">
      <router-view />
    </div>
  </div>
</template>

<style></style>
<script>
import AppBar from "./components/layout/AppBar.vue";
export default {
  components: { AppBar }
}
</script>