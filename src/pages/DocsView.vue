<template>
  <div class="page">
    <HeaderApp title="Hello world!" />
    <main class="main">
      <div class="container">
        <div class="gallery">
          <div
            class="card"
            v-for="item of store.allDocs"
            :class="{ active: item.filename === store.selectedDoc }"
            :key="item.id"
            @click="getFileName(item.filename)"
          >
            <svg width="150" height="150" fill="#ff0000">
              <use :href="`${IconFile}#file`"></use>
            </svg>
            <h3 class="card-title">{{ item.filename }}</h3>
          </div>
        </div>
      </div>
    </main>
    <footer class="footer">
      <div class="container">
        <button class="btn" @click="onClick" :disabled="!store.selectedDoc">
          next page
        </button>
      </div>
    </footer>
  </div>
</template>
<script setup>
import { useMainStore } from "../store";
import { useRouter } from "vue-router";
import HeaderApp from "../components/HeaderApp.vue";
import IconFile from "/img/file.svg";

const store = useMainStore();
const router = useRouter();

const onClick = () => {
  router.push({ name: "process" });
};

const getFileName = (filename) => {
  store.selectDocument(filename);
};
</script>
<style scoped lang="scss">
.gallery {
  display: flex;
  gap: 15px;
}
.btn {
  display: block;
  margin-left: auto;
}
.card {
  padding: 10px;
  border-radius: 4px;
  border: 3px solid #fff;
  width: fit-content;
  cursor: pointer;
  &.active {
    border-color: #e10915;
  }
}
.card-title {
  text-align: center;
  font-size: 18px;
  color: #323232;
}
</style>
