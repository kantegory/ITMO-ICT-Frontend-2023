<template>
    <div class="container mt-4">
        <h2 class="text-center"></h2>
        <div class="row">
            <div class="col-md-4">
                <div class="card mb-4">
                    <div class="card-body text-center">
                        <h3 class="text-center mb-4">Lose weight</h3>
                        <img src="https://assets.yazio.com/frontend/images/calculator/icon-negative-dynamic.svg"
                            class="card-img-small" alt="lose-weight">
                        <h5>Calorie intake per day</h5>
                        <h2 class="text-primary" id="lose-weight"></h2>
                        <p>This range of daily calories will enable you to lose 1-2 lbs per week in a healthy and
                            sustainable way.</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card mb-4">
                    <div class="card-body text-center">
                        <h3 class="text-center mb-4">Maintain weight</h3>
                        <img src="https://assets.yazio.com/frontend/images/calculator/icon-neutral-dynamic.svg"
                            class="card-img-small" alt="maintain-weight">
                        <h5>Calorie intake per day</h5>
                        <h2 class="text-primary" id="maintain-weight"></h2>
                        <p>This range of daily calories will enable you to maintain your current weight.</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card mb-4">
                    <div class="card-body text-center">
                        <h3 class="text-center mb-4">Gain weight</h3>
                        <img src="https://assets.yazio.com/frontend/images/calculator/icon-positive-dynamic.svg"
                            class="card-img-small" alt="gain-weight">
                        <h5>Calorie intake per day</h5>
                        <h2 class="text-primary" id="gain-weight"></h2>
                        <p>This range of daily calories will enable you to gain 1-2 lbs per week.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-4">
                <div class="card mb-4 h-100">
                    <div class="card-body text-center">
                        <h3 class="text-center mb-4">New calculation</h3>
                        <CalculatorItem />
                    </div>
                    <div class="d-flex justify-content-center">
                        <a href="/">
                            <PreviousItem />
                        </a>
                    </div>
                    <div class="my-3"></div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card mb-4 h-100">
                    <div class="card-body text-center">
                        <h3 class="text-center mb-4">Graph</h3>
                        <div class="chart-container">
                            <canvas ref="calorieChartCanvas"></canvas>
                        </div>
                    </div>
                </div>

            </div>
            <div class="col-md-4">
                <div class="card mb-4 h-100">
                    <div class="card-body text-center">
                        <h3 class="text-center mb-4">List Food</h3>
                        <FoodItem />

                    </div>
                    <div class="d-flex justify-content-center">
                        <a href="/food">
                            <NextItem />
                        </a>
                    </div>
                    <div class="my-3"></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import calculationStore from '@/stores/calculationStore'
import 'bootstrap/dist/css/bootstrap.min.css';
import FoodItem from './icons/Food.vue';
import NextItem from './icons/NextItem.vue';
import CalculatorItem from './icons/CaculatorItem.vue'
import PreviousItem from './icons/PreviousItem.vue'
import Chart from 'chart.js/auto';
import { mapActions } from 'pinia'

export default {
    name: 'ResultPage',
    components: {
        FoodItem,
        NextItem,
        CalculatorItem,
        PreviousItem,

    },
    data() {
        return {
            calorieHistory: [],
            calorieChart: null,
        };
    },

    methods: {
        ...mapActions(calculationStore, ['getCalculations']),
        async displayCalorieChart() {
            let calorieData = await this.getCalculations();
            
            calorieData = this.calorieHistory.slice(-7);
           
            let calorieData2 = [];

            calorieData.forEach((item) => {
                calorieData2.push(parseInt(item.data.caloriesNeeded));
            });
            console.log(calorieData)
            let ctx = this.$refs.calorieChartCanvas.getContext('2d');
            this.calorieChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
                    datasets: [{
                        label: 'Calories Consumed',
                        data: calorieData2,
                        fill: false,
                        borderColor: 'rgb(75, 192, 192)',
                        tension: 0.4,
                        pointRadius: 4,
                        pointHitRadius: 10,

                    }],
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            beginAtZero: true,
                        },
                    },
                },
            });
        },
        async showResult() {
            try {

                const response = await this.getCalculations();
                this.calorieHistory = response
                
                const lastItem = this.calorieHistory.slice(-1)[0].data.caloriesNeeded;
                const maintainWeightElement = document.getElementById('maintain-weight');
                maintainWeightElement.textContent = parseInt(lastItem);
                const loseWeightElement = document.getElementById('lose-weight');
                loseWeightElement.textContent = parseInt(lastItem * 0.8);
                const gainWeightElement = document.getElementById('gain-weight');
                gainWeightElement.textContent = parseInt(lastItem * 1.2);

            } catch (error) {
                console.error('Error fetching calculations:', error);
            }
        }

    },
    mounted() {
        this.showResult()
        this.displayCalorieChart();

    }
}
</script>
  
<style scoped></style>