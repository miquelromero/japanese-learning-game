import moment from 'moment';
import Info from './Info.vue';
import collection from './collection';
import modalities from '@/lessons/modalities';
import inputTypes from '@/lessons/input-types';
import QuestionsSetGenerator from '@/lessons/questions/QuestionsSetGenerator';

export default {
  active: true,
  slug: 'days-of-the-week',
  title: 'Days of the week',
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
        const unsortedWeekdays = moment.weekdays(false);
        return moment.weekdays(true).map(text => ({
          value: unsortedWeekdays.indexOf(text),
          text,
        }));
      },
    },
  },
};
