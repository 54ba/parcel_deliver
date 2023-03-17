<template>
    <transition name="slide-in-right">
        <div class="z-10 fixed right-0 top-16 bg-white h-full shadow-lg p-5 w-1/3 xl:w-1/4 rounded-l flex flex-col overflow-y-scroll no-scroll-track"
            v-if="modelValue">
            <div class="flex flex-row mb-2 text-gray-800 justify-between items-center">
                <p class="font-bold text-sm">Add Card</p>
                <mdicon name="close" class="cursor-pointer pl-5" @click="$emit('update:modelValue', false)" />
            </div>
            <divider />
            <div>
                <div class="flex flex-row text-gray-400 text-xs gap-2 items-center mb-2 mt-3">
                    <mdicon name="account-circle" size="16" />
                    <p class="tracking-tight">User</p>
                </div>

                <div class="flex flex-row text-gray-400 text-xs items-center mt-5 mb-5 justify-between">
                    <div class="flex flex-row items-center gap-2">
                        <mdicon name="file-document" size="16" />
                        <p class="tracking-tight">Timestamps</p>
                    </div>
                    <div class="flex gap-2">
                        <custom-button label="Save" color="green" small rounded="lg" wide v-if="desc.editable"
                            @click="save" />
                        <custom-button :label="desc.editable ? 'Cancel' : 'Edit'"
                            :append-icon="desc.editable ? 'close' : 'pencil'" small color="gray"
                            @click="clickCancelOrEdit" />
                    </div>
                </div>

                <!-- Description -->
                <board-details :editable="desc.editable" v-model="desc.value" @click="enableEditingIfAllowed" />

                <div class="flex flex-row text-gray-400 text-xs gap-2 items-center mb-2 mt-5">
                </div>


            </div>
        </div>
    </transition>
</template>

<script>
import Divider from "../../components/layout/Divider.vue";
import CustomButton from "../../components/form/CustomButton.vue";
import BoardDetails from "./BoardDetails.vue";
export default {
    props: ['modelValue'],
    emits: ['update:modelValue'],
    components: { BoardDetails, CustomButton, Divider },
    data() {
        return {
            desc: {
                editable: false,
                value: {
                    "type": "doc",
                    "content": [{
                        "type": "paragraph",
                        "content": [{ "type": "text", "text": "Add a description…" }]
                    }]
                },
                snapshot: ""
            },
        }
    },
    methods: {
        clickCancelOrEdit() {
            if (!this.desc.editable) {
                this.desc.editable = true;
                this.desc.snapshot = this.desc.value;
                return;
            }
            this.desc.editable = false;
            this.desc.value = this.desc.snapshot;
            this.desc.snapshot = ""
        },
        enableEditingIfAllowed() {
            if (!this.desc.editable)
                this.clickCancelOrEdit()
        },
        save() {
            this.desc.editable = false;
            this.desc.snapshot = ""
        }
    }
}

</script>

<style scoped></style>