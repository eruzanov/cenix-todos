<script setup lang="ts">
import { useTodosStore } from '@/stores/todos';

const state = useTodosStore();
</script>

<template>
  <v-text-field
    v-model.trim="state.searchQuery"
    label="Поиск по названию"
    clearable
    variant="outlined"
    hide-details
  ></v-text-field>
</template>
