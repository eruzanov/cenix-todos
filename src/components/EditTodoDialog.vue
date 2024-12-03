<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import type { Todo } from '@/stores/todo.type';
import { useTodosStore } from '@/stores/todos';

const store = useTodosStore();
const open = defineModel<boolean>();
const { id, name } = defineProps<Todo>();
const text = ref(name);
const disabled = computed(() => !text.value.length);

watch(open, () => (text.value = name));

const editTodo = () => {
  store.update({ id, name: text.value });
  open.value = false;
};
</script>

<template>
  <v-dialog v-model="open" max-width="600" opacity=".1">
    <v-card title="Изменить запись">
      <v-card-text>
        <v-textarea variant="outlined" rows="3" v-model.trim="text"></v-textarea>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text="Отменить" @click="open = false"></v-btn>
        <v-btn text="Изменить" color="primary" @click="editTodo" :disabled></v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
