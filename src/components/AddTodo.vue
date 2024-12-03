<script setup lang="ts">
import { ref } from 'vue';
import AddTodoDialog from '@/components/AddTodoDialog.vue';

const showDialog = ref(false);

const openDialog = () => (showDialog.value = true);
</script>

<template>
  <v-btn
    density="compact"
    icon="mdi-plus"
    color="primary"
    variant="flat"
    size="x-large"
    @click="openDialog"
  ></v-btn>
  <AddTodoDialog v-model="showDialog" />
</template>
