<template>
  <main>
    <TheAdvice :advice="store.adviceCurrent" @getAdvice="getAdvice" />
  </main>
</template>

<script setup>
import { onMounted } from "vue";
import TheAdvice from "@/components/TheAdvice.vue";

import useStore from "@/stores";
const store = useStore();

const getAdvice = () => {
  store.getAdvice();
};

onMounted(() => {
  store.getAdvice();
});
</script>

<style scoped lang="scss">
main {
  background: black;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}
</style>
