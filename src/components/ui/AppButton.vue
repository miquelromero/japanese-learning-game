<template>
  <button
    @click="$emit('click', $event)"
    class="bg-primary-500 hover:bg-primary-400 text-white font-bold py-2 px-4 rounded"
  >
    <slot />
  </button>
</template>
