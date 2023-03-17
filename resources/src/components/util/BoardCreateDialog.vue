<template>
  <custom-dialog :model-value="modelValue" @update:modelValue="close">
    <template v-slot:title>

    </template>

    <text-field placeholder="Add board title" class="w-full" v-model="title" :invalid="!valid" />
    <div class="flex justify-between gap-3">


      <board-visibility-input v-model="visibility" />
    </div>

    <div class="flex flex-row gap-3 mt-5">
      <div class="w-full" />
      <custom-button label="Cancel" color="text" @click="close" />
      <custom-button label="Create" append-icon="plus" color="primary" @click="create" />
    </div>
  </custom-dialog>
</template>

<script>
import Backdrop from "./Backdrop.vue";
import BoardVisibilityInput from "../form/BoardVisibilityInput.vue";
import TextField from "../form/TextField.vue";
import CustomButton from "../form/CustomButton.vue";
import ImageInputField from "../form/ImageInputField.vue";
import CustomDialog from "./CustomDialog.vue";

export default {
  name: "BoardCreateDialog",
  components: { CustomDialog, ImageInputField, CustomButton, TextField, BoardVisibilityInput, Backdrop },
  emits: ['update:modelValue'],
  props: {
    modelValue: {
      type: Boolean,
      default: true
    },
    editMode: {
      type: Boolean,
      default: false,
    },
    boardModel: {
      type: Object,
      default: {
        cover: undefined,
        title: "",
        visibility: "Private"
      }
    }
  },
  data() {
    return {
      visibility: "Private",
      cover: undefined,
      title: "",
      valid: true,
    }
  },
  mounted() {
    this.visibility = this.boardModel.visibility
    this.cover = this.boardModel.cover
    this.title = this.boardModel.title
  },
  methods: {
    create() {
      this.valid = this.cover && this.title && this.title.length >= 3 && this.title.length <= 30

      if (this.valid) {
        this.close()
      }
    },
    close() {
      this.$emit('update:modelValue', false);
      this.resetForm()
    },
    resetForm() {
      this.cover = undefined;
      this.title = ""
      this.valid = true
      this.visibility = "Private"
    }
  }
}
</script>

<style scoped></style>
