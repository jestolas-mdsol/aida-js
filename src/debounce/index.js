const debounce = (callback, delay) => {
  let timeoutId;

  return () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(callback, delay);
  };
};

export { debounce };
