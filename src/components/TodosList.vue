<script setup lang="ts">
import { computed, ref } from 'vue';
import { useTodosStore } from '@/stores/todos';
import TodoItem from '@/components/TodoItem.vue';

const state = useTodosStore();
const ITEMS_PER_PAGE = 5;
const limit = computed(() => state.todos.length);
const page = ref(1);
const paginationLength = computed(() => Math.ceil(limit.value / ITEMS_PER_PAGE));
</script>

<template>
  <template v-if="state.todos.length">
    <v-data-iterator :items="state.todos" :page="page" :items-per-page="ITEMS_PER_PAGE">
      <template v-slot:default="{ items }">
        <template v-for="item in items" :key="item.raw.id">
          <TodoItem :id="item.raw.id" :name="item.raw.name" />
        </template>
      </template>
      <template v-slot:footer>
        <v-pagination :length="paginationLength" v-model="page"></v-pagination>
      </template>
    </v-data-iterator>
  </template>
</template>
