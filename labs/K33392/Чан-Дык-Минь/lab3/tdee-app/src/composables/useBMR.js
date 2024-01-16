import { ref } from 'vue';

export function useBMR() {
  function calculateBMR(height, weight, age, gender, activityLevel) {
    const parsedHeight = parseInt(height, 10);
    const parsedWeight = parseInt(weight, 10);
    const parsedAge = parseInt(age, 10);
    const genderValue = gender.value;
    let R = 0;

    switch (activityLevel) {
      case 0:
        R = 1.2;
        break;
      case '0':
        R = 1.2;
        break;
      case 1:
        R = 1.375;
        break;
      case 2:
        R = 1.55;
        break;
      case 3:
        R = 1.725;
        break;
      case 4:
        R = 1.9;
        break;
    }

    console.log('R:', R)
    if (genderValue === 'men') {
      return (88.362 + 13.397 * parsedWeight + 4.799 * parsedHeight - 5.677 * parsedAge) * R;
    } else {
      return (447.593 + 9.247 * parsedWeight + 3.098 * parsedHeight - 4.33 * parsedAge) * R;
    }
  }

  return { calculateBMR };
}