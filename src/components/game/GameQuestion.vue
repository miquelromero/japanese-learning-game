<template>
  <component
    :is="component"
    :text="question.question"
    :is-correct-answer="isCorrectAnswer"
  />
</template>

<script>
import modalities from '@/lessons/modalities';
import GameQuestionAudio from '@/components/game/GameQuestionAudio.vue';
import GameQuestionText from '@/components/game/GameQuestionText.vue';

export default {
  props: {
    question: {
      type: Object,
      mandatory: true,
      default: undefined,
    },
    isCorrectAnswer: {
      type: Boolean,
      mandatory: true,
      default: null,
    },
  },
  computed: {
    component() {
      switch (this.question.modality) {
        case modalities.AUDIO:
          return GameQuestionAudio;
        case modalities.ROMAJI:
        case modalities.KANA:
        case modalities.KANJI:
        default:
          return GameQuestionText;
      }
    },
  },
};
</script>
