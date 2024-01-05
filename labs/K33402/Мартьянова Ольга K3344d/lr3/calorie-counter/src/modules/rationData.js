import { NutritionService } from '@/service/nutritions'

function calculateSum(ration) {
    let sum = 0
    ration.forEach(item =>
        sum += item.calories)
    return sum
}

export async function newRation(data) {
    const rationData = {};
    data = data.value
    for (const key in data) {
        const value = data[key];
        if (key !== "date") {
            const res = await NutritionService.getInfo(value);
            const calories = calculateSum(res.data.items)
            rationData[key] = calories;
        } else {
            rationData[key] = value;
        }
    }
    return rationData
}