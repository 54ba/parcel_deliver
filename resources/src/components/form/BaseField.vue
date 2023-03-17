<template>
  <div :class="{'flex flex-col field': true, 'field-invalid': invalid}">
    <div :class="{'field-base': true}">
      <div class="flex items-center" v-if="$slots.append || appendIcon">
        <slot name="append">
          <mdicon v-if="appendIcon" :name="appendIcon" class="text-gray-500" strokeWidth="2" width="18"/>
        </slot>
      </div>
      <div class="flex flex-col justify-center w-full">
        <slot name="default">
          Empty slot: default
        </slot>
      </div>
      <div class="flex items-center" v-if="$slots.append || prependIcon">
        <slot name="prepend">
          <mdicon
              v-if="prependIcon" :name="prependIcon"
              strokeWidth="2" width="18"
              :class="{'text-gray-500 ': true, 'animate-spin': spin}"
          />
        </slot>
      </div>
    </div>
    <transition name="slide-in-top">
      <slot name="message"/>
    </transition>
  </div>
</template>

<script>
export default {
  name: "BaseField",
  props: {
    outlined: {
      type: Boolean,
      default: false,
    },
    invalid: {
      type: Boolean,
      default: false,
    },
    appendIcon: String,
    prependIcon: String,
    spin: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
div.field-base {
  @apply px-5 p-2 flex flex-row justify-between items-center gap-3 tracking-tight rounded-xl border focus-within:shadow duration-75
}

div.field-invalid .field-base {
  @apply ring-2 ring-red-500 text-red-500
}

div:not(.field-invalid) p {
  @apply text-gray-500
}

div.field-invalid p,
div.field-invalid span {
  @apply text-red-500
}
</style>
