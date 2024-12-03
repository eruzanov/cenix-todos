<script setup lang="ts">
import type { Todo } from '@/stores/todo.type';
import { useTodosStore } from '@/stores/todos';

const store = useTodosStore();
const { id, name } = defineProps<Todo>();

const removeTodo = () => store.remove(id);
</script>

<template>
  <v-card variant="outlined" :class="$style.todo">
    <v-card-text>
      {{ name }}
    </v-card-text>
    <v-card-actions>
      <v-btn
        density="compact"
        icon="mdi-delete-alert-outline"
        size="x-large"
        color="warning"
        @click="removeTodo"
      ></v-btn>
    </v-card-actions>
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
