<template>
  <div class="ck-shopping-list">
    <div class="ck-shopping-list--title">
      <CKInput
        placeholder="Alimeto, bebida, producto..."
        v-model="newItem.name"
        @keypress.enter="onAddToListClick"
      ></CKInput>
      <CKButton @click="onAddToListClick">
        <template #icon>
          <i class="material-symbols-outlined">add</i>
        </template>
        Añadir a la lista
      </CKButton>
    </div>
    <div class="ck-shopping-list--container" v-if="items.length > 0">
      <div v-for="i in items" :key="i.id" class="ck-shopping-list--container__item">
        <CKCheckbox
          @click="onListItemClick(i)"
          :label="i.fields.name"
          v-model="i.fields.purchased"
        />
        <i
          class="material-symbols-outlined cursor-pointer mt-1"
          @click="onDeleteListItemClick(i)"
          >delete</i
        >
      </div>
    </div>
    <div class="mt-1 text-center" v-else>Aún no hay productos...</div>
  </div>
</template>

<script setup>
import CKInput from "../atoms/CKInput.vue";
import CKButton from "../atoms/CKButton.vue";
import CKCheckbox from "../atoms/CKCheckbox.vue";

const newItem = ref({
  name: null,
  purchased: false,
});
const items = ref([]);

const { data } = await useFetch("/api/shopping-list");
items.value = data.value;

const onAddToListClick = async () => {
  const response = await $fetch("/api/add-to-shopping-list", {
    method: "POST",
    body: {
      item: newItem.value,
    },
  });
  items.value.push(response);
  newItem.value = { name: null, purchased: false };
};

const onListItemClick = async (item) => {
  console.log("item :>> ", item);
  item.fields.purchased = !item.fields.purchased;
  delete item.fields.uuid;
  const response = await $fetch(`/api/update-shopping-list-item/${item.id}`, {
    method: "PUT",
    body: {
      fields: item.fields,
    },
  });
};

const onDeleteListItemClick = async (item) => {
  console.log("item :>> ", item);
  item.fields.purchased = !item.fields.purchased;
  delete item.fields.uuid;
  const response = await $fetch(`/api/delete-shopping-list-item/${item.id}`, {
    method: "DELETE",
  });
  if (response.deleted) {
    const { data } = await useFetch("/api/shopping-list");
    items.value = data.value;
  }
};
</script>

<style lang="scss" scoped>
.ck-shopping-list {
  height: 100%;
  &--title {
    align-items: center;
    justify-content: space-between;
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 8px;
  }
  &--container {
    margin-top: 4px;
    overflow-y: scroll;
    max-height: calc(100vh - 210px);
    height: 100%;
    padding: 8px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    &__item {
      display: flex;
      width: 100%;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding: 4px;
    }
  }
}
</style>
