<script setup lang="ts">
import { ref } from 'vue';
import type { Todo } from '@/stores/todo.type';
import { useTodosStore } from '@/stores/todos';
import EditTodoDialog from '@/components/EditTodoDialog.vue';

const store = useTodosStore();
const { id, name } = defineProps<Todo>();
const showDialog = ref(false);

const openDialog = () => (showDialog.value = true);
const removeTodo = () => store.remove(id);
</script>

<template>
  <v-card variant="outlined" :class="$style.todo">
    <v-card-text>{{ name }} </v-card-text>
    <v-card-actions>
      <v-btn
        density="compact"
        icon="mdi-note-edit-outline"
        size="x-large"
        color="primary"
        @click="openDialog"
      ></v-btn>
      <v-btn
        density="compact"
        icon="mdi-delete-alert-outline"
        size="x-large"
        color="warning"
        @click="removeTodo"
      ></v-btn>
    </v-card-actions>
  </v-card>
  <EditTodoDialog v-model="showDialog" :id :name />
</template>

<style module>
.todo {
  margin-block: 18px;
}

.todo:hover {
  background-color: hsl(208deg 100% 88.38% / 17%);
}
</style>
