<template>
  <DataTable
    :value="products"
    paginator
    :rows="10"
    :filters="filters"
    v-model:selection="selectedRow"
    selectionMode="single"
    :loading="loading"
  >
    <template #header>
      <div class="flex justify-end">
        <CKInput placeholder="Buscar" v-model="filters['global'].value"></CKInput>
      </div>
    </template>
    <template #empty> No customers found. </template>
    <template #loading> Loading customers data. Please wait. </template>
    <Column field="code" header="Code"></Column>
    <Column field="name" header="Name"></Column>
  </DataTable>
</template>

<script setup>
import CKInput from "../atoms/CKInput.vue";
import { FilterMatchMode } from "@primevue/core/api";

const filters = ref({
  global: { value: null, matchMode: FilterMatchMode.CONTAINS },
});

const selectedRow = ref();

const products = ref([
  { code: 1, name: "1" },
  { code: 2, name: "2" },
  { code: 2, name: "2" },
  { code: 2, name: "2" },
  { code: 2, name: "2" },
  { code: 2, name: "2" },
  { code: 2, name: "2" },
  { code: 2, name: "2" },
  { code: 2, name: "2" },
  { code: 2, name: "2" },
  { code: 2, name: "2" },
  { code: 2, name: "2" },
  { code: 2, name: "2" },
  { code: 2, name: "2" },
  { code: 2, name: "2" },
  { code: 2, name: "2" },
  { code: 2, name: "2" },
  { code: 2, name: "2" },
  { code: 2, name: "2" },
  { code: 2, name: "2" },
  { code: 2, name: "2" },
]);
</script>

<style lang="scss" scoped></style>
