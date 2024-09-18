<template>
  <div class="page">
    <HeaderApp :title="store.selectedDoc" />
    <main class="main">
      <div class="container">
        <form class="form">
          <div class="form-group">
            <label for="start-date">Date: </label>
            <div class="date-pickers">
              <VueDatePicker v-model="startDate" placeholder="Start date" />
              <VueDatePicker v-model="endDate" placeholder="End date" />
            </div>
          </div>
          <div class="form-group">
            <label for="owg">OWG</label>
            <multiselect
              :multiple="true"
              v-model="selected"
              :options="selectedOptions"
            ></multiselect>
          </div>

          <div class="form-group">
            <label>Text 2</label>
            <div class="button-group">
              <button
                class="btn"
                type="button"
                @click="handleClick('A')"
                :class="{ active: selectedParam === 'A' }"
              >
                A
              </button>
              <button
                class="btn"
                type="button"
                @click="handleClick('B')"
                :class="{ active: selectedParam === 'B' }"
              >
                B
              </button>
              <button
                class="btn"
                type="button"
                @click="handleClick('C')"
                :class="{ active: selectedParam === 'C' }"
              >
                C
              </button>
            </div>
          </div>
        </form>
        <div class="btns">
          <button
            class="btn"
            type="button"
            @click="selectPrecess(1)"
            :class="{ active: selectedPrecess === 1 }"
          >
            process 1
          </button>
          <button
            class="btn"
            type="button"
            @click="selectPrecess(2)"
            :class="{ active: selectedPrecess === 2 }"
          >
            process 2
          </button>
        </div>
      </div>
    </main>
    <footer class="footer">
      <div class="container">
        <button class="btn" type="button" @click="prevPage">prev page</button>
        <button
          class="btn"
          type="button"
          @click="startProcess"
          :disabled="disabled"
        >
          start
        </button>
      </div>
    </footer>
    <ModalApp
      :isOpen="isModalOpened"
      @modal-close="closeModal"
      name="first-modal"
    >
      <template #content
        ><h2 class="modal-text">{{ textModal }}</h2></template
      >
    </ModalApp>
    <LoaderApp :isLoader="isLoader" />
  </div>
</template>
  <script setup>
import { ref, computed } from "vue";
import { useMainStore } from "../store";
import { useRouter } from "vue-router";
import Multiselect from "vue-multiselect";
import VueDatePicker from "@vuepic/vue-datepicker";
import HeaderApp from "../components/HeaderApp.vue";
import ModalApp from "../components/ModalApp.vue";
import LoaderApp from "../components/LoaderApp.vue";

import "@vuepic/vue-datepicker/dist/main.css";

const store = useMainStore();
const router = useRouter();

const isLoader = ref(false);
const selected = ref([]);
const startDate = ref(null);
const endDate = ref(null);
const selectedPrecess = ref(null);
const selectedParam = ref(null);
const textModal = ref("");

const selectedOptions = [
  "options 1",
  "options 2",
  "options 3",
  "options 4",
  "options 5",
];
const isModalOpened = ref(false);

const disabled = computed(
  () =>
    !selected.value.length ||
    !startDate.value ||
    !endDate.value ||
    !selectedPrecess.value ||
    !selectedParam.value
);

const closeModal = () => {
  isModalOpened.value = false;
};

const handleClick = (value) => {
  selectedParam.value = value;
};

const prevPage = () => {
  router.push({ path: "/" });
};

const addLoader = (time) => {
  return new Promise((res) => setTimeout(() => res(), time));
};

const startProcess = async () => {
  isLoader.value = true;
  const time = selectedPrecess.value === 1 ? 10000 : 7000;
  await addLoader(time);
  isLoader.value = false;
  textModal.value = "Process success " + selectedPrecess.value;
  isModalOpened.value = true;
};

const selectPrecess = (id) => {
  selectedPrecess.value = id;
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
  <style scoped lang="scss">
.main .container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.footer .container {
  display: flex;
  justify-content: space-between;
}
.form-group {
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 15px;
}

.date-pickers {
  display: flex;
  gap: 10px;
}

.button-group button {
  margin-right: 10px;
}
.form {
  margin: 0 auto;
  width: fit-content;
}
:deep(.multiselect) {
  width: 505px;
}
.btns {
  padding-top: 40px;
  display: flex;
  justify-content: center;
  gap: 15px;
}
:deep(.multiselect__tag) {
  background: #e10915;
}
:deep(.multiselect__tag-icon::after) {
  content: "×";
  color: #fff;
  font-size: 16px;
}
:deep(.multiselect__option--highlight) {
  background: #e10915;
  &::after {
    background: #e10915;
  }
}
</style>