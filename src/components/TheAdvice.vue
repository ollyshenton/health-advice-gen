<template>
  <div class="container">
    <h1>Advice #{{ advice.id }}</h1>
    <p v-if="advice.advice">"{{ advice.advice }}"</p>
    <img src="../assets/Dekor.svg" class="dekor" />

    <Dice @click="$emit('getAdvice')" @keydown="getAdvice" id="dice-wrapper" />
  </div>
</template>

<script setup>
import Dice from "@/components/Dice.vue";

// eslint-disable-next-line no-unused-vars
const props = defineProps({
  advice: {
    type: Object,
    default: () => ({}),
  },
});
</script>

<style scoped lang="scss">
.container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  border-radius: 10px;
  padding: 46px 20px 0 20px;
  background-color: var(--darkBlue);
  max-width: 600px;
  margin: 0 auto;

  // 375px squeezes the box from my testing
  @media (min-width: 400px) {
    padding: 50px 128px 0 128px;
  }

  h1 {
    color: var(--lightBlue);
    font-weight: 700;
    text-transform: uppercase;
    font-size: 14px;
    text-align: center;
    letter-spacing: 0.19em;
    line-height: 17px;
    margin-bottom: 32px;
  }
}

p {
  font-size: 28px;
  color: var(--lightCyan);
  text-align: center;
  line-height: 29px;
  margin-bottom: 79.5px;
  font-weight: 700;
}
.dekor {
  margin: 0 auto;
  display: flex;
}
#dice-wrapper {
  position: relative;
  top: 40px;
  margin: 0 auto;
}
</style>
