class EventEmitter {
  constructor() {
    this.listeners = new Map([['regular', new Map()], ['once', new Map()]]);
  }

  /**
   * Register new events with listeners
   * @param eventName
   * @param callback
   * @return {EventEmitter}
   */
  on(eventName, callback) {
    return this.addListener('regular', eventName, callback);
  }

  /**
   * Register new events with listeners which will be triggered once and removed
   * @param eventName
   * @param callback
   * @return {EventEmitter}
   */
  once(eventName, callback) {
    return this.addListener('once', eventName, callback);
  }

  addListener(eventType, eventName, callback) {
    const event = this.listeners.get(eventType);
    if (!event.get(eventName)) {
      event.set(eventName, []);
    }
    event.get(eventName).push(callback);
    return this;
  }

  onEveryEvent(callback) {
    if (this._onEveryCallback) {
      console.warn('Overring old callback'); // eslint-disable-line
    }
    this._onEveryCallback = callback;
  }
  /**
   * Emit event with data
   * @param eventType
   * @param data
   */
  emit(eventType, data = {}) {
    const once = this.listeners.get('once');
    const regular = this.listeners.get('regular');
    if (this._onEveryCallback) {
      this._onEveryCallback(eventType, data);
    }
    if (!once && !regular) return;
    (once.get(eventType) || []).forEach(listener => {
      listener({ ...data, eventType });
    });
    once.delete(eventType);
    (regular.get(eventType) || []).forEach(listener => {
      listener({ ...data, eventType });
    });
  }
}

export default EventEmitter;
