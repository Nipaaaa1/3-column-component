<script setup lang="ts">
import { PropType } from "vue";
import { clsx } from "clsx";

type carType = {
  colors: string;
  image: string;
  title: string;
  description: string;
}[];

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

defineProps({
  carData: { type: Object as PropType<carType>, required: true },
});
</script>

<template>
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
          'rounded-full bg-white px-8 py-3 font-lexendDeca transition hover:bg-white/0 hover:text-white hover:ring-2 hover:ring-white',
          car.colors,
          true,
        )
      "
    >
      Learn More
    </button>
  </div>
</template>
