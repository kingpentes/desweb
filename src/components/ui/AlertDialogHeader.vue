<script setup>
const props = defineProps({
  class: {
    type: String,
    default: ''
  }
});
</script>

<template>
  <div :class="['flex flex-col space-y-2 text-center sm:text-left', props.class]">
    <slot />
  </div>
</template>
