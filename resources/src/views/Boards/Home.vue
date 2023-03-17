<template>
    <div>
        <div class="mt-14 flex flex-auto container mx-auto flex flex-col gap-5">
            <div class="flex items-center justify-between">
                <p class="font-medium text-xl">Your boards</p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                <board-card :key="1" :name="boardsName[0]" @select="$router.push('/board/1')" />
                <board-card :key="2" :name="boardsName[1]" @select="$router.push('/board/2')" />
            </div>
        </div>
    </div>
</template>

<script>
import BoardCard from "./BoardCard.vue";
import CustomButton from "../../components/form/CustomButton.vue";
import CustomDialog from "../../components/util/CustomDialog.vue";

export default {
    name: "Home",
    components: { CustomDialog, CustomButton, BoardCard },

    data() {
        return {
            boardsName: ['Sender', 'Biker']
        }
    }
}
</script>

<style scoped></style>