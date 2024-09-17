<template>
  <div class="modal-w" :class="{ open: isOpen }">
    <div class="modal-wrapper">
      <div class="modal-container" ref="target">
        <div class="modal-header">
          <slot name="header"> </slot>
        </div>
        <div class="modal-body">
          <slot name="content"> </slot>
        </div>
        <div class="modal-footer">
          <slot name="footer">
            <button @click.stop="emit('modal-close')" class="btn mt-3">
              Schließen
            </button>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script setup>
import { ref } from "vue";
import { onClickOutside } from "@vueuse/core";

const props = defineProps({
  isOpen: Boolean,
});

const emit = defineEmits(["modal-close"]);

const target = ref(null);
onClickOutside(target, () => emit("modal-close"));
</script>
  
  
  
  <style scoped lang="scss">
.modal-container {
  display: grid;
  align-items: center;
  width: 450px;
  min-height: 200px;
  padding: 20px 30px;
  text-align: center;
  background-color: #fff;
  position: relative;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
}
.modal-close {
  position: absolute;
  cursor: pointer;
  top: -12.5px;
  right: -12.5px;
  height: 25px;
  width: 25px;
  border: 1px solid rgb(106, 105, 105);
  background: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 100%;
}
.mt-3 {
  margin-top: 16px;
}
</style>