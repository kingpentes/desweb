<script setup>
import { provide, computed } from 'vue';

const props = defineProps({
  open: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['update:open']);

// Provide context for child components
provide('alertDialogContext', {
  open: computed(() => props.open),
  close: () => emit('update:open', false),
});
</script>

<template>
  <slot />
</template>
