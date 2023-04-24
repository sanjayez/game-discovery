export {};
export function debounced(callback: Function, delay: number) {
  let timerID: ReturnType<typeof setTimeout>;
  return function (this: any, ...args: any[]) {
    clearTimeout(timerID);
    timerID = setTimeout(() => {
      callback.apply(this, args);
    }, delay);
  };
}
