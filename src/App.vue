<script setup lang="ts">
import { useTodosStore } from '@/stores/todos';
import SearchTodo from '@/components/SearchTodo.vue';
import AddTodo from '@/components/AddTodo.vue';
import TodosList from '@/components/TodosList.vue';

const store = useTodosStore();
</script>

<template>
  <header :class="$style.header">
    <SearchTodo />
    <AddTodo />
  </header>
  <template v-if="store.searchQuery">
    <TodosList :todos="store.searchResult">
      По вашему запросу ничего не нашлось
    </TodosList>
  </template>
  <template v-else>
    <TodosList :todos="store.todos">
      Пока нет ни одной записи
    </TodosList>
  </template>
</template>

<style module>
.header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-block: 1rem 2rem;
}
</style>
