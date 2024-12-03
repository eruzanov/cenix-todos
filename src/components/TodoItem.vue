<script setup lang="ts">
import { ref } from 'vue';
import type { Todo } from '@/stores/todo.type';
import { useTodosStore } from '@/stores/todos';
import EditTodoForm from '@/components/EditTodoForm.vue';

const store = useTodosStore();
const { id, name } = defineProps<Todo>();
const showDialog = ref(false);

const toggleDialog = () => (showDialog.value = !showDialog.value);
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
        @click="toggleDialog"
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
  <v-dialog v-model="showDialog" max-width="600" opacity=".1">
    <EditTodoForm :id :name @done="toggleDialog" />
  </v-dialog>
</template>

<style module>
.todo {
  margin-block: 18px;
}

.todo:hover {
  background-color: hsl(208deg 100% 88.38% / 17%);
}
</style>
