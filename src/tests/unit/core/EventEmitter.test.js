import EventEmitter from '../../../core/EventEmitter';

describe('Test even emitter', () => {
  it('should register event listener', () => {
    const event = new EventEmitter();
    event.on('test', () => null);
    expect(event.listeners.get('regular').size).toBe(1);
  });

  it('should execute listener when event is triggered', () => {
    const event = new EventEmitter();
    const mockFn = jest.fn(() => null);
    const mockFn2 = jest.fn(() => null);
    event.on('test', mockFn).on('test', mockFn2);
    event.emit('test');
    expect(mockFn).toBeCalledTimes(1);
    expect(mockFn2).toBeCalledTimes(1);
  });
});
