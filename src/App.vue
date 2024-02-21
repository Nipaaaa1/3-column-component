<script setup lang="ts">
import data from "./data.json";
import Card from "./components/Card.vue";
import { useHead } from "@unhead/vue";

const carData = data.content;
useHead({
  title: "3 column components",
});
</script>

<template>
  <main class="grid min-h-svh place-items-center px-6 py-16">
    <section
      class="flex flex-col overflow-clip rounded-lg md:max-w-4xl md:flex-row"
    >
      <Card :carData="carData" />
    </section>
  </main>
</template>
