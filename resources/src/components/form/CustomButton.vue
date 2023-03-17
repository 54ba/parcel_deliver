<template>
  <button :class="{
    'btn-base': true, //Always include base
    [computedRounded]: true,
    ['btn-' + this.color]: !!this.color && !this.transparent,
    ['btn-only-icon']: this.onlyIcon,
    'btn-small': this.small,
    'btn-block': this.block,
    'btn-wide': this.wide
  }" v-bind="$attrs">
    <slot name="append">
      <mdicon v-if="appendIcon" :name="appendIcon" :width="iconSize" />
    </slot>
    <slot name="content">
      {{ label }}
    </slot>
    <slot name="prepend">
      <mdicon v-if="prependIcon" :name="prependIcon" :width="iconSize" />
    </slot>
  </button>
</template>

<script>
export default {
  name: "CustomButton",
  props: {
    label: String,
    appendIcon: String,
    prependIcon: String,
    onlyIcon: [Boolean, false],
    rounded: {
      type: String,
      default: "md"
    },
    color: {
      type: String,
      default: "gray"
    },
    small: {
      type: Boolean,
      default: false
    },
    wide: {
      type: Boolean,
      default: false,
    },
    block: {
      type: Boolean,
      default: false,
    },
    transparent: { type: Boolean, default: false },
  },
  computed: {
    iconSize() {
      return this.small ? 12 : 16
    },
    //Purging purpose
    computedRounded() {
      switch (this.rounded) {
        case "sm":
          return "border-sm";
        case "normal":
          return "border";
        case "md":
          return "rounded-md";
        case "lg":
          return "rounded-lg"
        case "xl":
          return "rounded-xl"
        case "2xl":
          return "rounded-2xl"
        case "3xl":
          return "rounded-3xl"
        case "full":
          return "rounded-full"
        default:
          return "rounded-none"
      }
    },
  }
}
</script>
<style scoped>
.btn-base {
  @apply px-8 p-2 flex flex-row justify-center items-center justify-center gap-3 tracking-tight font-medium
}

.btn-small {
  @apply text-sm px-3 p-1
}

.btn-wide {
  @apply px-4
}

.btn-block {
  @apply w-full
}

/* TEXT */
.btn-text {
  @apply text-gray-500
}

.btn-text :hover {
  @apply bg-gray-100
}

.btn-text :active {
  @apply bg-gray-200
}


/* GREEN */
.btn-green {
  @apply text-white bg-green-600
}

.btn-green :hover {
  @apply bg-green-700
}

.btn-green :active {
  @apply bg-green-800
}



/* GRAY */

.btn-gray {
  @apply bg-gray-100 text-gray-500
}

.btn-gray :hover {
  @apply bg-gray-200
}

.btn-gray :active {
  @apply bg-gray-300
}



.btn-gray-outline {
  @apply text-gray-500 border border-gray-500
}


.btn-gray-outline :hover {
  @apply bg-gray-100
}

.btn-gray-outline :active {
  @apply bg-gray-200
}


/* PRIMARY */
.btn-primary {
  @apply bg-primary-600 text-white
}

.btn-primary :hover {
  @apply bg-primary-700
}

.btn-primary :active {
  @apply bg-primary-800
}




.btn-primary-invert {
  @apply text-primary-600 bg-primary-100
}

.btn-primary-invert :hover {
  @apply bg-primary-200
}

.btn-primary-invert :active {
  @apply bg-primary-300
}



/* RED */

.btn-outline-red {
  @apply text-red-600 border border-red-600
}

.btn-outline-red :hover {
  @apply bg-red-100
}

.btn-outline-red :active {
  @apply bg-red-200
}


/* VARIANTS */
.btn-only-icon {
  @apply px-3
}
</style>
