<script setup>
import BMIScoreTable from '@/components/BMIScoreTable.vue';
import { ref, onMounted } from 'vue'

const maintainCalo = ref(0);
const BMI = ref(0);
const classBMI = ref('');
const idealWeight = ref(0);

onMounted(() => {
    idealWeight.value = parseInt(localStorage.getItem('idealWeight'))
    maintainCalo.value = parseInt(localStorage.getItem('BMR'))
    BMI.value = localStorage.getItem('BMI')

    if (BMI.value < 18.5) {
        classBMI.value = 'Underweight'
    } else if (BMI.value < 25) {
        classBMI.value = 'Normal Weight'
    } else if (BMI.value < 30) {
        classBMI.value = 'Overweight'
    } else {
        classBMI.value = 'Obesity'
    }
})


</script>

<template>
    <!-- body -->
    <div class="container mt-5 ">

        <div class="row">
            <!-- stat -->

            <!-- calories per day -->
            <div class="col border border-black d-flex flex-column align-items-left">
                <div>
                    <h1>
                        Your stats
                    </h1>
                </div>
                <div class="d-flex align-items-baseline">
                    <h5>Your Maintenance Calories:</h5>
                    <div class="ms-2">
                        <h5 id="BMR"> {{ maintainCalo }} calories per day</h5>
                    </div>
                </div>

                <div class="d-flex">
                    <h5 class="me-2">
                        Ideal weight: {{ idealWeight }} kg
                    </h5>
                </div>

                <h5 class="me-2">
                    Your BMI score: {{ BMI }}
                </h5>
                <span> Which means you are classified as <b>{{ classBMI }}</b></span>
                <!-- Macronutrients -->
                <div>
                    <h1>
                        Macronutrients
                    </h1>
                    <div class="">
                        <div class="d-flex ">
                            <h5 class="">
                                Maintenance
                            </h5>

                            <p class="macro">&nbsp;{{ maintainCalo }} calories per day</p>
                        </div>

                        <div>
                            <div class="d-flex">
                                <h5 class="">
                                    Cutting
                                </h5>

                                <p class="macro">&nbsp;{{ maintainCalo - 300 }} calories per day</p>
                            </div>
                        </div>
                        <div>
                            <div class="d-flex">
                                <h5 class="">
                                    Bulking
                                </h5>
                                <p class="macro">&nbsp;{{ maintainCalo + 300 }} calories per day</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- BMI table -->
            <div class="col border border-black">
                <BMIScoreTable />
            </div>
        </div>


    </div>
</template>

<style>

</style>