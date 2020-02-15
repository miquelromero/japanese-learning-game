export default class QuestionsSetGenerator {
  constructor(collection) {
    this._collection = collection;
  }

  generate({ modality }) {
    return this._collection.map(collectionItem => ({
      question: collectionItem[modality.id],
      value: collectionItem.value,
    }));
  }
}
