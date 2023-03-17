<template>
  <div class="index-bar">
    <div class="flex flex-col lg:flex-row gap-5 items-center">

      <divider class="inline lg:hidden" vv-if="$route.params.id" />

      <router-link to="/" v-if="$route.href == '/board/1' || $route.href == '/board/2'">
        <custom-button label="All boards" append-icon="dots-grid" />
      </router-link>
    </div>

  </div>
</template>

<script>
import Divider from "./Divider.vue";
import CustomButton from "../form/CustomButton.vue";

export default {
  components: {
    CustomButton,
    Divider,
  },
  computed() {

  }
}
</script>

<style  scoped>
div.index-bar {
  @apply p-3 flex flex-col flex-row justify-between shadow bg-white sticky top-0 bg-white z-50
}
</style>
