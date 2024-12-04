<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import type { Todo } from '@/stores/todo.type';
import TodoItem from '@/components/TodoItem.vue';

const ITEMS_PER_PAGE = 5;
const { todos } = defineProps<{ todos: Todo[] }>();
const currentPage = ref(1);
const paginationLength = computed(() => Math.ceil(todos.length / ITEMS_PER_PAGE));

watch(paginationLength, () => {
  if (paginationLength.value < currentPage.value) {
    currentPage.value = paginationLength.value || 1;
  }
});
</script>

<template>
  <template v-if="todos.length">
    <v-data-iterator :items="todos" :page="currentPage" :items-per-page="ITEMS_PER_PAGE">
      <template v-slot:default="{ items }">
        <template v-for="item in items" :key="item.raw.id">
          <TodoItem :id="item.raw.id" :name="item.raw.name" />
        </template>
      </template>
      <template v-slot:footer>
        <v-pagination :length="paginationLength" v-model="currentPage"></v-pagination>
      </template>
    </v-data-iterator>
  </template>
  <slot v-else></slot>
</template>
