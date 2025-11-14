<script setup>
import { ref } from 'vue';

const props = defineProps({
  src: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    required: true
  },
  fallback: {
    type: String,
    default: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect width="400" height="300" fill="%23ddd"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" dy=".3em" fill="%23999" font-family="sans-serif" font-size="18"%3EImage%3C/text%3E%3C/svg%3E'
  },
  class: {
    type: String,
    default: ''
  }
});

const imgSrc = ref(props.src);
const hasError = ref(false);

const handleError = () => {
  if (!hasError.value) {
    hasError.value = true;
    imgSrc.value = props.fallback;
  }
};
</script>

<template>
  <img 
    :src="imgSrc" 
    :alt="alt" 
    :class="props.class"
    @error="handleError"
  />
</template>
