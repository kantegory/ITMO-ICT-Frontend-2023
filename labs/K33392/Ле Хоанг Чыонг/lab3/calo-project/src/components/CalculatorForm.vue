<template>
    <div class="wrapper">

        <div class="container mt-5">

            <div class="d-flex flex-column align-items-center mb-5">
                <h1 class="pt-3 font-title-2 font-semibold">Calorie Calculator</h1>
            </div>
            <form @submit.prevent="saveCalculationAndRedirect">
                <!-- ... -->
                <div class="mb-3">
                    <label for="weight">Weight (in kg):</label>
                    <input type="number" class="form-control" id="weight" placeholder="Enter your weight"
                        v-model="form.weight">
                </div>
                <!-- ... -->
                <div class="mb-3">
                    <label for="height">Height (in cm):</label>
                    <input type="number" class="form-control" id="height" placeholder="Enter your height"
                        v-model="form.height">
                </div>
                <!-- ... -->
                <div class="mb-3">
                    <label for="age">Age:</label>
                    <input type="number" class="form-control" id="age" placeholder="Enter your age" v-model="form.age">
                </div>
                <!-- ... -->
                <div class="mb-3">
                    <label for="gender">Gender:</label>
                    <select class="form-control" id="gender" v-model="form.gender">
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>
                <!-- ... -->
                <div class="mb-3">
                    <label for="activity-level">Activity Level:</label>
                    <select class="form-control" id="activity-level" v-model="form.activityLevel">

                        <option value="sedentary">Sedentary (little or no exercise)</option>
                        <option value="lightly-active">Lightly active (light exercise/sports 1-3 days/week)</option>
                        <option value="moderately-active">Moderately active (moderate exercise/sports 3-5 days/week)
                        </option>
                        <option value="very-active">Very active (hard exercise/sports 6-7 days a week)</option>
                        <option value="super-active">Super active (very hard exercise/sports & physical job or 2x
                            training)</option>

                    </select>
                </div>
                <!-- ... -->
                <div class="text-center">
                    <button type="submit" class="btn btn-primary" >Calculate</button>
                </div>
            </form>

        </div>
    </div>
</template>
<script>
import calculationStore from '@/stores/calculationStore'
import { mapActions } from 'pinia'
export default {
    name: 'CalculatorForm',
    data() {
        return {
            form: {
                weight: null,
                height: null,
                age: null,
                gender: 'male',
                activityLevel: 'sedentary',
            },
        };
    },
    methods: {
        ...mapActions(calculationStore, ['postCalculation']),
        async saveCalculationAndRedirect() {
            try {
                const activityLevels = {
                    'sedentary': 1.2,
                    'lightly-active': 1.375,
                    'moderately-active': 1.55,
                    'very-active': 1.725,
                    'super-active': 1.9,
                };
                console.log('ok')
                const { weight, height, age, gender, activityLevel } = this.form;

                let bmr;
                if (gender === 'male') {
                    bmr = 88.362 + 13.397 * weight + 4.799 * height - 5.677 * age;
                } else {
                    bmr = 447.593 + 9.247 * weight + 3.098 * height - 4.33 * age;
                }
                const caloriesNeeded = bmr * activityLevels[activityLevel];

                const calculationData = {
                    weight,
                    height,
                    age,
                    gender,
                    activityLevel,
                    caloriesNeeded: caloriesNeeded.toFixed(2),
                    date: new Date().toLocaleString(),
                };

                
                await this.postCalculation({
                    data: calculationData,
                });

                this.$router.push('/result');
            } catch (error) {
                console.error('Error saving calculation:', error);

            }
        },

    },
};
</script>
  
<style scoped></style>