<template>
  <div class="flex items-center justify-center w-full">
    <p
      class="text-2xl lg:text-3xl xl:text-4xl"
      :class="{
        'text-green-600': isCorrectAnswer === true,
        'text-red-600': isCorrectAnswer === false,
      }"
    >
      {{ text }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      mandatory: true,
      default: undefined,
    },
    isCorrectAnswer: {
      type: Boolean,
      mandatory: true,
      default: null,
    },
  },
};
</script>
