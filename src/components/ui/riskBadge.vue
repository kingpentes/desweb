<script setup>
import { computed } from 'vue';

// Props
const props = defineProps({
  level: {
    type: String,
    required: true,
    validator: v => ["Rendah", "Sedang", "Tinggi", "Sangat Tinggi"].includes(v)
  }
});

// Warna berdasarkan level
const colorClass = computed(() => {
  return {
    'Rendah': 'bg-green-100 text-green-700',
    'Sedang': 'bg-blue-100 text-blue-700',
    'Tinggi': 'bg-orange-100 text-orange-700',
    'Sangat Tinggi': 'bg-red-100 text-red-700'
  }[props.level];
});
</script>

<template>
  <span class="px-3 py-1 text-sm font-semibold rounded-full" :class="colorClass">
    {{ level }}
  </span>
</template>
