<template>
  <menuable activate-only-on-click>
    <template v-slot:activator="{ on }">
      <slot :on="on" :label="modelValue" :appendIcon="icon" :rounded="rounded">
        <custom-button v-on="on" :label="modelValue" :append-icon="icon" :rounded="rounded" />
      </slot>
    </template>

    <template v-slot:default="{ close }">
      <dropdown-menu title="Visibility" description="Choose who can view this board.">
        <div class="flex flex-col gap-2 transition-all duration-100">
          <visibility-setting title="Public" description="Anyone on the internet can view this board." icon="earth"
            @click="$emit('update:modelValue', 'Public'); close()" />
          <visibility-setting title="Private" description="Only members can view the board." icon="lock"
            @click="$emit('update:modelValue', 'Private'); close()" />
        </div>
      </dropdown-menu>
    </template>
  </menuable>
</template>

<script>
import Menuable from "../util/Menuable.vue";
import CustomButton from "./CustomButton.vue";
import DropdownMenu from "../util/DropdownMenu.vue";
import VisibilitySetting from "./VisibilitySetting.vue";

export default {
  name: "BoardVisibilityInput",
  components: { VisibilitySetting, DropdownMenu, CustomButton, Menuable },
  props: {
    modelValue: String,
    rounded: {
      type: String,
      default: "md"
    }
  },
  emits: ['update:modelValue'],
  computed: {
    icon() {
      return this.modelValue === "Private" ? "lock" : "earth"
    }
  }
}
</script>

<style scoped></style>
