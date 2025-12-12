<template>
  <button
    :class="cn(
      'inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer',
      isActive ? 'bg-background text-foreground shadow-sm' : 'hover:bg-muted/50',
      $attrs.class
    )"
    @click="setActive"
  >
    <slot />
  </button>
</template>

<script setup>
import { inject, computed } from 'vue'
import { cn } from '../../lib/utils'

const props = defineProps({
  value: String
})

const activeTab = inject('activeTab')
const isActive = computed(() => activeTab.value === props.value)

const setActive = () => {
  activeTab.value = props.value
}
</script>
