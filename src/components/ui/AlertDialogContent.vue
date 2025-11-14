<script setup>
import { Teleport, inject } from 'vue';

const props = defineProps({
  class: {
    type: String,
    default: ''
  }
});

const context = inject('alertDialogContext');

const handleOverlayClick = () => {
  if (context && context.close) {
    context.close();
  }
};
</script>

<template>
  <Teleport to="body">
    <Transition name="dialog">
      <div v-if="context && context.open.value" class="fixed inset-0 z-50 flex items-center justify-center">
        <!-- Overlay -->
        <div 
          class="fixed inset-0 bg-black/80 backdrop-blur-sm"
          @click="handleOverlayClick"
        ></div>
        
        <!-- Content -->
        <div 
          :class="[
            'relative z-50 grid w-full max-w-lg gap-4 border bg-background p-6 shadow-lg duration-200',
            'sm:rounded-lg',
            props.class
          ]"
        >
          <slot />
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.dialog-enter-active,
.dialog-leave-active {
  transition: opacity 0.2s ease;
}

.dialog-enter-from,
.dialog-leave-to {
  opacity: 0;
}

.dialog-enter-active .relative,
.dialog-leave-active .relative {
  transition: transform 0.2s ease, opacity 0.2s ease;
}

.dialog-enter-from .relative,
.dialog-leave-to .relative {
  transform: scale(0.95);
  opacity: 0;
}
</style>
