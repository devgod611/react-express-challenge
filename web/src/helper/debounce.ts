export const debounceFn = (fn: any, delay: number = 2000) => {
  return (...args: any) => {
    setTimeout(() => {
      fn(...args);
    }, delay);
  };
};
