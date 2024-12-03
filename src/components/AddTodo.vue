<script setup lang="ts">
import { ref } from 'vue';
import AddTodoForm from '@/components/AddTodoForm.vue';

const showDialog = ref(false);

const toggleDialog = () => (showDialog.value = !showDialog.value);
</script>

<template>
  <v-btn
    density="compact"
    icon="mdi-plus"
    color="primary"
    variant="flat"
    size="x-large"
    @click="toggleDialog"
  ></v-btn>
  <v-dialog v-model="showDialog" max-width="600" opacity=".1">
    <AddTodoForm @done="toggleDialog" />
  </v-dialog>
</template>
