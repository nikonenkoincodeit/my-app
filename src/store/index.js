import { computed, ref, reactive } from "vue";
import { defineStore } from "pinia";

export const useMainStore = defineStore("main", () => {
  const doc = ref("");

  const docs = ref([
    { id: 1, filename: "file 1" },
    { id: 2, filename: "file 2" },
    { id: 3, filename: "file 3" },
    { id: 4, filename: "file 4" },
  ]);

  const allDocs = computed(() => docs.value);
  const selectedDoc = computed(() => doc.value);

  function selectDocument(name = "") {
    doc.value = name;
  }

  return { allDocs, selectedDoc, selectDocument };
});
