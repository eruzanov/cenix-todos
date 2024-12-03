import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import { v4 as uuidv4 } from 'uuid';
import { useStorage } from '@vueuse/core';
import type { Todo } from './todo.type';

const LABEL_STORE = 'todos';

export const useTodosStore = defineStore(LABEL_STORE, () => {
  const todos = useStorage<Todo[]>(LABEL_STORE, []);
  const searchQuery = ref('');
  const searchResult = computed(() =>
    todos.value.filter((todo) =>
      todo.name.toLocaleLowerCase().includes(searchQuery.value.toLowerCase()),
    ),
  );

  function add(name: Todo['name']) {
    todos.value = todos.value.concat({ id: uuidv4(), name });
  }

  function remove(id: Todo['id']) {
    todos.value = todos.value.filter((todo) => todo.id !== id);
  }

  function update({ id, name }: Todo) {
    todos.value = todos.value.map((todo) => (todo.id === id ? { id, name } : todo));
  }

  return { searchQuery, searchResult, todos, add, remove, update };
});
