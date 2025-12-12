<script setup>
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '.'

defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: ''
  },
  items: {
    type: Array,
    required: true
  },
  columns: {
    type: String,
    default: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
  },
  showIcon: {
    type: Boolean,
    default: false
  }
})

defineEmits(['itemClick'])
</script>

<template>
  <section class="container mx-auto px-4 py-12 sm:py-16">
    <!-- Section Header -->
    <div class="text-center mb-8 sm:mb-12">
      <h2 class="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
        {{ title }}
      </h2>
      <p v-if="description" class="text-muted-foreground max-w-2xl mx-auto leading-relaxed text-sm sm:text-base">
        {{ description }}
      </p>
    </div>

    <!-- Cards Grid -->
    <div class="grid gap-4 sm:gap-6" :class="columns">
      <Card 
        v-for="item in items" 
        :key="item.id || item.title"
        class="border-2 border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 group"
        :class="{ 'cursor-pointer': $attrs.onClick }"
        @click="$emit('itemClick', item)"
      >
        <CardHeader class="text-center">
          <!-- Icon (optional) -->
          <div 
            v-if="showIcon && item.icon" 
            class="w-14 h-14 bg-linear-to-br from-primary/10 to-chart-2/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform mx-auto"
          >
            <component :is="item.icon" class="w-7 h-7 text-primary" />
          </div>

          <!-- Image (optional) -->
          <div v-else-if="item.image" class="relative h-48 overflow-hidden rounded-lg mb-4 -mx-6 -mt-6">
            <img 
              :src="item.image" 
              :alt="item.title"
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
          </div>

          <!-- Badge/Category (optional) -->
          <div v-if="item.category || item.badge" class="mb-2">
            <span class="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
              {{ item.category || item.badge }}
            </span>
          </div>
          
          <CardTitle>{{ item.title }}</CardTitle>
        </CardHeader>

        <CardContent class="text-center">
          <!-- Slot for custom content -->
          <slot name="cardContent" :item="item">
            <CardDescription v-if="item.description" class="leading-relaxed">
              {{ item.description }}
            </CardDescription>
            <p v-else-if="item.content" class="text-muted-foreground">
              {{ item.content }}
            </p>
          </slot>
        </CardContent>
      </Card>
    </div>

    <!-- Empty State -->
    <div v-if="items.length === 0" class="text-center py-16">
      <p class="text-muted-foreground text-lg">Tidak ada data tersedia.</p>
    </div>
  </section>
</template>
