<template>
  <div class="tabs-root">
    <slot />
  </div>
</template>

<script setup>
import { provide, ref } from 'vue'

const props = defineProps({
  defaultValue: {
    type: String,
    default: ''
  }
})

const activeTab = ref(props.defaultValue)
provide('activeTab', activeTab)
</script>
