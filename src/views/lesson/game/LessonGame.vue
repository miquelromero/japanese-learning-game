<template>
  <app-layout :layout-props="layoutProps">
    <div class="absolute h-full w-full top-0">
      <div class="container flex flex-col h-full">
        <div class="flex flex-grow p-4">
          <game-question
            :question="currentQuestion"
            :is-correct-answer="isCorrectAnswer"
          />
        </div>
        <div class="p-4">
          <game-input
            :input="lesson.input"
            @input="onInput"
            :disabled="isAnswerSent"
          />
        </div>
      </div>
    </div>
  </app-layout>
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex';
import GameQuestion from '@/components/game/GameQuestion.vue';
import GameInput from '@/components/game/GameInput.vue';

export default {
  components: {
    GameQuestion,
    GameInput,
  },
  methods: {
    ...mapActions('lesson', ['finish', 'nextQuestion', 'sendAnswer']),
    onInput(value) {
      this.sendAnswer(value);
      setTimeout(() => {
        this.nextQuestion();
      }, 1200);
    },
  },
  computed: {
    ...mapState('lesson', ['lesson', 'modality']),
    ...mapGetters('lesson', [
      'currentQuestion',
      'isCorrectAnswer',
      'isAnswerSent',
    ]),
    layoutProps() {
      return {
        showNavbar: false,
      };
    },
  },
};
</script>
