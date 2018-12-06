import EventEmitter from './EventEmitter';
import Storage from './Storage';
import { PRESERVE_PREFERENCES } from '../consts';
import { preferencesFactory } from '../utils';
import { hydratePreferences } from '../store/actions';

class TweetDeck extends EventEmitter {
  constructor({ store }) {
    super();
    this.store = store;
    this.storage = Storage.getInstance();
  }

  init() {
    this.on(PRESERVE_PREFERENCES, this.preservePreferences.bind(this));
  }
  preservePreferences(preferences) {
    this.storage.set('preferences', preferences);
  }
  loadPreservedPreferences() {
    let preferences = this.storage.get('preferences');
    if (!preferences) {
      preferences = preferencesFactory();
      this.emit(PRESERVE_PREFERENCES, preferences);
    }
    this.store.dispatch(hydratePreferences(preferences));
  }
}
export default TweetDeck;
