function calculateAge(birthdate) {
    const today = new Date();
    const birthDate = new Date(birthdate);

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    return age;
}

function calculateCalories(data) {

    const weight = data.weight;
    const height = data.height;
    const date = new Date(data.dateOfBirth)
    const age = calculateAge(date);
    const gender = data.gender;

    if (!weight || !height || !age || !gender) {
        const message = `Please, enter more of your data for calculation`;
    }
    else if (gender === 'female') {
        const norm = 447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age);
        return norm;
    } else if (gender === 'male') {
        const norm = 88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age);
        return norm;
    }
    return;
}

export function processParams(userData) {
    const paramData = {
        'Height': userData.height,
        'Weight': userData.weight,
        'Age': calculateAge(userData.dateOfBirth),
        'Calorie intake': calculateCalories(userData)
    }

    return paramData
}