<script setup>
const props = defineProps({
  class: {
    type: String,
    default: ''
  }
});
</script>

<template>
  <button
    type="button"
    :class="[
      'inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium',
      'bg-primary text-primary-foreground hover:bg-primary/90',
      'ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2',
      'focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
      props.class
    ]"
  >
    <slot />
  </button>
</template>
