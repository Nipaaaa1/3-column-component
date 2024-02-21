<script setup lang="ts">
import data from "./data.json";
import { clsx } from "clsx";

const carData = data.content;
const carColors = (styles: string, colors: string, text: boolean) => {
  return clsx(styles, {
    ["bg-primary-brightOrange"]: colors === "brightOrange" && text === false,
    ["bg-primary-darkCyan"]: colors === "darkCyan" && text === false,
    ["bg-primary-veryDarkCyan"]: colors === "veryDarkCyan" && text === false,
    ["text-primary-brightOrange"]: colors === "brightOrange" && text === true,
    ["text-primary-darkCyan"]: colors === "darkCyan" && text === true,
    ["text-primary-veryDarkCyan"]: colors === "veryDarkCyan" && text === true,
  });
};
</script>

<template>
  <main class="grid place-items-center px-6 py-16">
    <section class="flex flex-col overflow-clip rounded-lg">
      <div
        v-for="car in carData"
        :class="
          carColors(
            'flex w-full flex-col items-start gap-8 p-10',
            car.colors,
            false,
          )
        "
      >
        <img class="h-8 w-max" :src="car.image" alt="Car Image" />
        <h1 class="font-bigShouldersDisplay text-4xl text-white">
          {{ car.title }}
        </h1>
        <p class="font-lexendDeca text-white/75">{{ car.description }}</p>
        <button
          :class="
            carColors(
              'font-lexendDeca rounded-full bg-white px-8 py-3',
              car.colors,
              true,
            )
          "
        >
          Learn More
        </button>
      </div>
    </section>
  </main>
</template>
