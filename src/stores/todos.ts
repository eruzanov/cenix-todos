import { ref } from 'vue';
import { defineStore } from 'pinia';
import type { Todo } from './todo.type';

export const useTodosStore = defineStore('todos', () => {
  const todos = ref<Todo[]>([]);

  return { todos };
});
