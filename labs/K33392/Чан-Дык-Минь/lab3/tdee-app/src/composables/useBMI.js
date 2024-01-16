import { ref } from 'vue';

export function useBMI() {
  function calculateBMI(height, weight) {
    const parsedHeight = parseInt(height, 10);
    const parsedWeight = parseInt(weight, 10);
    return (parsedWeight / ((parsedHeight / 100) * (parsedHeight / 100))).toFixed(2);
  }

  return { calculateBMI };
}