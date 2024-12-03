<script setup lang="ts">
import { ref, computed } from 'vue';
import { useTodosStore } from '@/stores/todos';

const store = useTodosStore();
const emit = defineEmits<{ done: [] }>();
const text = ref('');
const disabled = computed(() => !text.value.length);

const onCancel = () => {
  text.value = '';
  emit('done');
};

const addTodo = () => {
  store.add(text.value);
  onCancel();
};
</script>

<template>
  <v-card title="Добавить запись">
    <v-card-text>
      <v-textarea variant="outlined" rows="3" v-model.trim="text"></v-textarea>
    </v-card-text>
    <v-card-actions>
      <v-btn text="Отменить" @click="onCancel"></v-btn>
      <v-btn text="Добавить" color="primary" @click="addTodo" :disabled></v-btn>
    </v-card-actions>
  </v-card>
</template>
