<template>
  <li class="bg-white rounded-md p-4 flex flex-col items-center self-start overflow-hidden">
    <h3 class="w-full font-bold mb-6 pb-4 border-b border-blue-200 flex flex-row items-center justify-between">
      <span>
        <span class="block">
          {{ productCard.title }}
        </span>
        <span class="text-xs text-blue-300">
          {{ productCard.category }}
        </span>
      </span>
      <span class="border rounded-full py-2 px-4 text-sm">
        ${{ productCard.price }}
      </span>
    </h3>
    <p class="text-sm mb-4">
      {{ productCard.description }}
    </p>
    <img class="block max-w-xs p-8" v-bind:src="productCard.image"></img>
  </li>
</template>

<script>
export default {
  props: ['productCard']
}
</script>
