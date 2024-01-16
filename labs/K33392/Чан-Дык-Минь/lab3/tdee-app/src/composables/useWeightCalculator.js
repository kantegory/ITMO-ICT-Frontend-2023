export function useWeightCalculator() {
    function calculateWeight(h, sex) {
      const parsedHeight = parseInt(h, 10);
      const convertedHeight = parsedHeight * 0.39370;
  
      if (sex === "men") {
        return Math.round(50 + 2.3 * (convertedHeight - 60));
      } else {
        return Math.round(45.5 + 2.3 * (convertedHeight - 60));
      }
    }
    return { calculateWeight };
}