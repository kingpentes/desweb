<script setup>
const props = defineProps({
  class: {
    type: String,
    default: ''
  }
});
</script>

<template>
  <h2 :class="['text-lg font-semibold', props.class]">
    <slot />
  </h2>
</template>
