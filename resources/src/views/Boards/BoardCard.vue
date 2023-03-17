<template>
    <div class="bg-white shadow p-3 rounded-xl relative group">

        <div class="flex flex-col gap-3 cursor-pointer" @click="$emit('select')">
            <p class="font-medium tracking-tight text-lg">{{ name }} Dashboard</p>
        </div>
    </div>
</template>
  
<script>
import Menuable from "../../components/util/Menuable.vue";
import CustomButton from "../../components/form/CustomButton.vue";
export default {
    name: "BoardCard",
    components: { CustomButton, Menuable },
    props: ['name']
}
</script>
  
<style scoped></style>