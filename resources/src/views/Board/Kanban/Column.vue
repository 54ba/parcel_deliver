<template>
    <div class="column">
        <div class="flex justify-between cursor-move select-none">
            <div class="font-medium">{{ column.name }}</div>
            <menuable ignore-max-width activate-only-on-click ref="updateOrDelete">
                <template v-slot:activator="{ on }">
                    <mdicon v-on="on" name="dots-horizontal" class="cursor-pointer" />
                </template>
                <template v-slot:default>
                    <dropdown-menu basic>
                        <div class="text-gray-500 flex flex-col gap-3 p-1 select-none">
                            <p class="hover:text-gray-600 cursor-pointer">Update</p>
                            <hr />
                            <p class="hover:text-gray-600 cursor-pointer">Delete</p>
                        </div>
                    </dropdown-menu>
                </template>
            </menuable>
        </div>
        <hr />

        <!-- Cards -->
        <draggable v-model="column.items" item-key="_id" group="cards" v-if="column"
            class="flex flex-col gap-5 no-scroll-track -m-3 p-3" ghost-class="ghost">
            <template #item="{ element }">
                <kanban-card :item="element" />
            </template>
            <template v-slot:footer>
                <custom-button block label="Drag me" color="primary-invert" />
            </template>
        </draggable>
    </div>
</template>
  
<script>
import draggable from "vuedraggable"
import CustomButton from "../../../components/form/CustomButton.vue";
import Menuable from "../../../components/util/Menuable.vue";
import DropdownMenu from "../../../components/util/DropdownMenu.vue";
import KanbanCard from "./KanbanCard.vue";

export default {
    name: "Column",
    components: { KanbanCard, DropdownMenu, Menuable, CustomButton, draggable },
    props: ['column'],
    methods: {
        recalculatePosition() {
            this.$refs.updateOrDelete.calculatePosition()
        }
    }
}
</script>
  
<style scoped>
div.column {
    width: 20rem;
    height: 100%;
    @apply h-full max-h-full flex-shrink-0 flex flex-col gap-5
}

.ghost-column {
    min-height: 75vh;
    @apply border border-dotted border-primary-500 border-2 ring-offset-8 ring-primary-600 h-full bg-primary-100 rounded-lg
}

.ghost-column * {
    display: none;
}
</style>