export const getUid = (): string => {
  const uintArray = new Uint32Array(3);
  window.crypto.getRandomValues(uintArray);
  return (
    performance.now().toString(36) +
    Array.from(uintArray)
      .map((item) => item.toString(36))
      .join('')
  ).replace(/\./g, '');
};
