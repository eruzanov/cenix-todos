<script setup lang="ts">
import { ref, computed } from 'vue';
import type { Todo } from '@/stores/todo.type';
import { useTodosStore } from '@/stores/todos';

const store = useTodosStore();
const emit = defineEmits<{ done: [] }>();
const { id, name } = defineProps<Todo>();
const text = ref(name);
const disabled = computed(() => !text.value.length);

const onCancel = () => {
  text.value = name;
  emit('done');
};

const editTodo = () => {
  store.update({ id, name: text.value });
  onCancel();
};
</script>

<template>
  <v-card title="Изменить запись">
    <v-card-text>
      <v-textarea variant="outlined" rows="3" v-model.trim="text"></v-textarea>
    </v-card-text>
    <v-card-actions>
      <v-btn text="Отменить" @click="onCancel"></v-btn>
      <v-btn text="Изменить" color="primary" @click="editTodo" :disabled></v-btn>
    </v-card-actions>
  </v-card>
</template>
