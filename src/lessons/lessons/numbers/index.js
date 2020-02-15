import Info from './Info.vue';
import modalities from '@/lessons/modalities';
import inputTypes from '@/lessons/input-types';

export default {
  active: true,
  slug: 'numbers',
  title: 'Numbers',
  info: Info,
  availableModalities: [
    modalities.ROMAJI,
    modalities.KANA,
    modalities.KANJI,
    modalities.AUDIO,
  ],
  input: {
    type: inputTypes.INPUT,
    params: {
      type: 'numbers',
    },
  },
  generate: () => 0,
};
