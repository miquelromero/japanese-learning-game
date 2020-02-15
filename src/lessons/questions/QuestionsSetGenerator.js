import { shuffle } from 'lodash';

export default class QuestionsSetGenerator {
  constructor(collection) {
    this._collection = collection;
  }

  generate({ modality, number }) {
    const uniqueQuestionsSet = this._collection.map(collectionItem => ({
      question: collectionItem[modality.id],
      value: collectionItem.value,
    }));
    const repetitions = Math.ceil(number / uniqueQuestionsSet.length);
    return shuffle(
      Array(repetitions)
        .fill(uniqueQuestionsSet)
        .flat(),
    ).slice(number);
  }
}
