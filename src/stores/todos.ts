import { defineStore } from 'pinia';
import { v4 as uuidv4 } from 'uuid';
import { useStorage } from '@vueuse/core';
import type { Todo } from './todo.type';

const LABEL_STORE = 'todos';

export const useTodosStore = defineStore(LABEL_STORE, () => {
  const todos = useStorage<Todo[]>(LABEL_STORE, []);

  function add(name: Todo['name']) {
    todos.value = todos.value.concat({ id: uuidv4(), name });
  }

  return { todos, add };
});
