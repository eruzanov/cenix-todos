import { ref } from 'vue';
import { defineStore } from 'pinia';
import { v4 as uuidv4 } from 'uuid';
import type { Todo } from './todo.type';

export const useTodosStore = defineStore('todos', () => {
  const todos = ref<Todo[]>([]);

  function add(name: Todo['name']) {
    todos.value = todos.value.concat({ id: uuidv4(), name });
  }

  return { todos, add };
});
