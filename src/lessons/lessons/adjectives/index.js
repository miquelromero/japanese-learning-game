import Info from './Info.vue';
import collection from './collection';
import modalities from '@/lessons/modalities';
import inputTypes from '@/lessons/input-types';
import QuestionsSetGenerator from '@/lessons/questions/QuestionsSetGenerator';

export default {
  active: true,
  slug: 'adjectives',
  title: 'Adjectives',
  info: Info,
  availableModalities: [
    modalities.ROMAJI,
    modalities.KANA,
    modalities.KANJI,
    modalities.AUDIO,
  ],
  questions: new QuestionsSetGenerator(collection),
  input: {
    type: inputTypes.SET,
    params: {
      values: () => {
        return collection.map(adjective => ({
          value: adjective.value,
          text: adjective.value,
        }));
      },
    },
  },
};
