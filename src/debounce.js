export const debounce = (func, ms) => {
  let debounceStart = null;

  return () => {
    debounceStart = Date.now();

    const callback = () => {
      const now = Date.now();

      if (debounceStart + ms < now) {
        func();
      }
    };

    setTimeout(callback, ms);
  };
};

export default debounce;
