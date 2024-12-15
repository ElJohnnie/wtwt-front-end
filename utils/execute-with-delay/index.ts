const waitTimeInMilliseconds = (timeInMilliseconds: number) =>
  new Promise<void>((resolve) => setTimeout(resolve, timeInMilliseconds));

export const executeWithDelay = <T>(
  promise: Promise<T>,
  delay: number,
): Promise<T> => {
  return new Promise<T>((resolve, reject) => {
    Promise.all([promise, waitTimeInMilliseconds(delay)])
      .then((results) => resolve(results[0]))
      .catch(reject);
  });
};
