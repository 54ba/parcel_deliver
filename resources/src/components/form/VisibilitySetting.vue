<template>
  <div class="flex flex-col gap-3 p-3 hover:bg-gray-100 rounded-xl cursor-pointer active:bg-gray-200">
    <div class="flex flex-row text-gray-600 gap-2 items-center">
      <mdicon :name="icon" size="20"/>
      <p class="font-medium ">{{ title }}</p>
    </div>
    <p class="text-gray-400">{{ description }}</p>
  </div>
</template>

<script>
export default {
  name: "VisibilitySetting",
  props: ["title", "description", "icon"]
}
</script>

<style scoped>

</style>
