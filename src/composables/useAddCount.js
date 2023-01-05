export const useAddCount = () => {
  const num = ref(0);

  const addCount = () => {
    num.value++;
  };
  return {
    num,
    addCount,
  };
};
