<script setup lang="ts">
import type { Todo } from '@/stores/todo.type';

const { name } = defineProps<Todo>();
</script>

<template>
  <v-card variant="outlined" :class="$style.todo">
    <v-card-text>
      {{ name }}
    </v-card-text>
  </v-card>
</template>

<style module>
.todo {
  margin-block: 18px;
}

.todo:hover {
  background-color: hsl(208deg 100% 88.38% / 17%);
}
</style>
