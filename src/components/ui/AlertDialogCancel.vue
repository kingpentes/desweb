<script setup>
import { inject } from 'vue';

const props = defineProps({
  class: {
    type: String,
    default: ''
  }
});

const context = inject('alertDialogContext');

const handleClick = () => {
  if (context && context.close) {
    context.close();
  }
};
</script>

<template>
  <button
    type="button"
    :class="[
      'inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium',
      'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
      'ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2',
      'focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
      'mt-2 sm:mt-0',
      props.class
    ]"
    @click="handleClick"
  >
    <slot />
  </button>
</template>
