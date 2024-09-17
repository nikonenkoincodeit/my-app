<template>
  <header class="header">
    <div class="container">
      <h1 class="title">{{ title }}</h1>
      <img :src="logo" alt="Logo" width="72" height="72" class="logo" />
    </div>
  </header>
</template>
<script setup>
import logo from "/img/logo.svg";

defineProps({ title: { type: String } });
</script>
<style scoped>
.header {
  background: #fff;
  height: 100px;
}
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.logo {
  position: absolute;
  transform: translateY(-50%);
  top: 50%;
  right: 15px;
}
.title {
  font-size: 30px;
  font-weight: 700;
}
</style>