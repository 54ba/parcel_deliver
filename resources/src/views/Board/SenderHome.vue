<template>
    <div>

        <board-menu v-model="menuShown" />
        <div class="flex justify-between flex-col lg:flex-row gap-5">

            <custom-button label="Show menu" append-icon="dots-horizontal" @click="menuShown = true" />
        </div>

        <background>
            <draggable v-model="columns" item-key="name"
                class="flex bottom-0 h-full w-full overflow-x-auto gap-10 p-3 mb-5 h-min"
                @end="columnsRefs.forEach(ref => ref.recalculatePosition())" ghost-class="ghost-column" filter="input"
                :preventOnFilter="true">
                <template v-slot:item="{ element }">
                    <column :column="element" :ref="setColumnRef" />
                </template>
            </draggable>
        </background>
    </div>
</template>
  
<script>
import draggable from "vuedraggable"
import CustomButton from "../../components/form/CustomButton.vue";
import Background from "../../components/layout/Background.vue";
import Menuable from "../../components/util/Menuable.vue";
import DropdownMenu from "../../components/util/DropdownMenu.vue";
import BoardMenu from "./BoardMenu.vue";
import TextField from "../../components/form/TextField.vue";
import Column from "./Kanban/Column.vue";
import SenderDataService from "../../services/SenderDataService";

export default {
    name: "Board",
    components: {
        TextField,
        Column,
        BoardMenu, DropdownMenu, Menuable, Background, CustomButton,
        draggable
    },
    async mounted(id = "616f4b59f16b5e46cb68c561") {
        console.log("mounted");

        let status_0 = this.columns[0].name.toLowerCase();
        const res_0 = await SenderDataService.getParcelsByStatus(id, status_0);
        this.columns[0].items = res_0.data;


        let status_1 = this.columns[1].name.toLowerCase();
        const res_1 = await SenderDataService.getParcelsByStatus(id, status_1);
        this.columns[1].items = res_1.data;

        let status_2 = this.columns[2].name.toLowerCase();
        const res_2 = await SenderDataService.getParcelsByStatus(id, status_2);
        this.columns[2].items = res_2.data;


    },

    methods: {

        setColumnRef(el) {
            if (el) {
                this.columnsRefs.push(el)
            }
        }
    },
    beforeUpdate() {
        this.columnsRefs = [];
    },
    data() {
        return {
            visibility: "Private",
            menuShown: false,
            columnsRefs: [],

            createList: {
                title: "",
                invalid: false
            },

            columns: [
                {
                    name: "Created",
                    items: [
                        {

                        }
                    ]
                },
                {
                    name: "Picked up",
                    items: [
                        {

                        }
                    ]
                },
                {
                    name: "Delivered",
                    items: [
                        {
                        }
                    ],
                }
            ]
        }
    },
}
</script>
  
<style scoped></style>