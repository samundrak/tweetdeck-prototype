import { set, get } from 'dot-prop-immutable';

class Storage {
  constructor() {
    if (Storage.INSTANCE) {
      throw new Error('This class can be instantiate only once.');
    }
    this.platform = window.localStorage;
    this.dbName = 'tweetDeck';
  }
  static getInstance() {
    if (!Storage.INSTANCE) {
      return new Storage();
    }
    return Storage.INSTANCE;
  }

  get(key) {
    const data = JSON.parse(this.platform.getItem(this.dbName) || '{}');
    return get(data, key);
  }
  set(key, value) {
    this.platform.setItem(this.dbName, JSON.stringify(set(JSON.parse(this.platform.getItem(this.dbName) || '{}'), key, value)));
  }
}
Storage.INSTANCE = null;
export default Storage;
