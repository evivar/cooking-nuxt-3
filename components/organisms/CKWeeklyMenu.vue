<template>
  <div class="ck-weekly-menu">
    <div class="title">
      <span>Menu semanal</span>
      <CKButton @click="onEditClick">
        <template #icon>
          <i class="material-symbols-outlined"> {{ isEditing ? "save" : "edit" }}</i>
        </template>
        {{ isEditing ? "Guardar" : "Editar" }}
      </CKButton>
    </div>
    <div class="content">
      <div class="header">
        <span class="title"></span>
        <span class="title"> Comida </span>
        <span class="title"> Cena </span>
      </div>
      <div class="week">
        <div
          v-for="(day, i) in menu"
          :key="i"
          class="day"
          :class="{ 'current-day': new Date().getDay() === day.fields.id }"
        >
          <span class="title">{{ day.fields.dayName }}</span>
          <CKTextarea
            v-if="isEditing"
            placeholder="Comida"
            rows="2"
            v-model="day.fields.meal"
          />
          <span v-else class="meal">{{ day.fields.meal }}</span>
          <CKTextarea
            v-if="isEditing"
            placeholder="Cena"
            rows="2"
            v-model="day.fields.dinner"
          />
          <span v-else class="meal">{{ day.fields.dinner }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import CKButton from "../atoms/CKButton.vue";
import CKTextarea from "../atoms/CKTextarea.vue";

const isEditing = ref(false);
const menu = ref([]);

const { data } = await useFetch("/api/weekly-menu");
menu.value = data.value;

const onEditClick = async () => {
  if (isEditing.value) {
    const response = await $fetch("/api/update-menu", {
      method: "PUT",
      body: {
        records: menu.value.map((record) => ({
          id: record.id,
          fields: {
            dayName: record.fields.dayName,
            meal: record.fields.meal,
            dinner: record.fields.dinner,
          },
        })),
      },
    });
  }
  isEditing.value = !isEditing.value;
};
</script>

<style lang="scss" scoped>
.ck-weekly-menu {
  padding: 8px;
  & > .title {
    @apply lg:text-xl text-base font-semibold;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  & > .content {
    margin-top: 8px;
    // border: 1px solid #12b488;
    border-radius: 5px;
    & > .header {
      @apply font-semibold;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      padding: 8px;
      column-gap: 8px;
      border-bottom: 1px solid #12b488;
    }
    & > .week {
      & > .day {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        align-items: center;
        padding: 8px;
        column-gap: 8px;
        & > .title {
          @apply font-semibold;
          height: 100%;
        }
        & > .meal {
          height: 100%;
        }
      }
    }
  }
}

.current-day {
  @apply shadow-sm;
  background: rgb(18, 180, 136, 0.25);
  border-radius: 5px;
  & > .title {
    border-right: 1px solid #12b488;
    height: 100%;
  }
}
</style>
