<template>
  <backdrop :visible="modelValue" />

  <transition name="slide-in-bottom">
    <div class="z-50 absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center" v-if="modelValue">
      <div class="p-5 bg-white border shadow rounded-lg w-1/4 flex flex-col gap-5 relative">
        <div class="flex justify-between">
          <slot name="title">
            <p class="font-bold text-xl">
              {{ title }}
            </p>
          </slot>
          <custom-button append-icon="close" class="absolute -top-4 -right-4" only-icon color="primary" @click="close" />
        </div>
        <slot />
      </div>
    </div>
  </transition>
</template>

<script>
import Backdrop from "./Backdrop.vue";
import BoardVisibilityInput from "../form/BoardVisibilityInput.vue";
import TextField from "../form/TextField.vue";
import CustomButton from "../form/CustomButton.vue";

export default {
  name: "CustomDialog",
  components: { CustomButton, TextField, BoardVisibilityInput, Backdrop },
  props: {
    title: String,
    modelValue: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    create() {
      this.close()
    },
    close() {
      this.$emit('update:modelValue', false);
    },
  }
}
</script>

<style scoped></style>
