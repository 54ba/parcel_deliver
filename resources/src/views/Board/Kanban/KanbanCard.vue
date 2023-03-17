<template>
    <div class="shadow bg-white rounded-lg p-3 flex flex-col gap-3 cursor-pointer relative select-none" ref="root">

        <input class="selectable focus:outline-offset-2 select-non" :value="item.pickupAddress" />
        <input class="selectable focus:outline-offset-2 select-non" :value="item.dropoffAddress" />
        <input class="selectable focus:outline-offset-2 select-non" v-if="item.sender" :value="item.sender.name" />
    </div>
</template>

<script>
import CustomButton from "../../../components/form/CustomButton.vue";
import Menuable from "../../../components/util/Menuable.vue";
const maxMembersPerCard = 3;
export default {
    name: "KanbanCard",
    components: { Menuable, CustomButton },
    props: ["item"],
    computed: {

    }
}
</script>

<style scoped>
.ghost {
    min-height: 15rem;
    @apply border border-dotted border-primary-500 border-2 ring-offset-8 ring-primary-600 h-full bg-primary-100
}

.ghost * {
    display: none;
}
</style>