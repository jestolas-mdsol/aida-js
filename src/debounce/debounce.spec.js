import { debounce } from './index';

const delay = 1000;
const mockFn = jest.fn();
const debounceTrigger = debounce(mockFn, delay);

describe('debounce', () => {
  it('should run mockFn after delay has elapsed', () => {
    debounceTrigger();
    expect(mockFn).toHaveBeenCalledTimes(0);

    setTimeout(() => {
      expect(mockFn).toHaveBeenCalledTimes(1);
    }, delay);
  });

  it('should run callback once after debounceTrigger is called 10 times', () => {
    for (let i = 0;i < 10;i++) {
      debounceTrigger();
      expect(mockFn).toHaveBeenCalledTimes(0);
    }

    setTimeout(() => {
      expect(mockFn).toHaveBeenCalledTimes(1);
    }, delay);
  });
});
