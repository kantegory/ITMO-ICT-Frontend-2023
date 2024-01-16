<template>
    <div class="container">
        <div class="d-flex justify-content-between align-items-center">
            <h1 class="mb-0">Food List</h1>
            <div class="meal-search-box">
                <input v-model="searchInput" type="text" class="search-control" placeholder="Enter an ingredient"
                    id="search-input">
                <button id="search-btn" class="btn btn-outline-success" aria-label="Search"
                    @click="getMealList">Search</button>
            </div>
        </div>
        <hr class="line">
        <div class="row" id="meal">
            <div v-for="meal in mealList" :key="meal.recipe.uri" class="col-md-4">
                <div class="card mb-4">
                    <img :src="meal.recipe.image || 'fallback.jpg'" class="card-img-top" alt="food">
                    <div class="card-body">
                        <h5 class="card-title">{{ meal.recipe.label }}</h5>
                        <a href="#" class="recipe-btn" @click="handleGetRecipe(extractId(meal.recipe.uri))">Get Recipe</a>
                        <a href="#" class="add-dishes-btn" @click="handleAddDish(meal)">Add dishes</a>
                    </div>
                </div>
            </div>
        </div>

    </div>

    <!-- Recipe Modal -->
    <div class="modal fade" id="recipeModal" tabindex="-1" aria-labelledby="recipeModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="recipeModalLabel">Recipe Details</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <RecipeContent v-if="selectedMeal" :meal="selectedMeal" @close="selectedMeal = null" />
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="addDishModal" tabindex="-1" aria-labelledby="addDishModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="addDishModalLabel">Add Dishes</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <AddDishContent/>
                </div>
                <button type="button" class="add-dishes-btn" @click="saveDish(selectedMeal)">Add</button>
            </div>
        </div>
    </div>
</template>
<script>
import * as bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { ref, onMounted } from 'vue';
import { useApi } from '../api/useApi';
import RecipeContent from './RecipeContent.vue';
import AddDishContent from './AddDishContent.vue';
import { useApiRecipe } from '../api/useApiRecipe';
import { extractId } from '../api/extractId'
export default {
    components: {
        RecipeContent,
        AddDishContent
    },
    methods: {

        async handleGetRecipe(mealId) {
            try {
                console.log(mealId)
                const { fetchRecipe } = useApiRecipe(mealId);
                const recipe = await fetchRecipe();
                console.log(recipe)
                this.selectedMeal = recipe
                const modal = new bootstrap.Modal(document.getElementById('recipeModal'));
                console.log('ok')
                modal.show();
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        },

        async saveDish(meal) {
            
            let diaryItem;

            diaryItem = {
                type: document.getElementById('meal-type').value,
                date: document.getElementById('meal-date').value,
                name: meal.recipe.label,
                calo: meal.recipe.calories
            };


            let diary = JSON.parse(localStorage.getItem('diary')) || [];
            diary.push(diaryItem);
            localStorage.setItem('diary', JSON.stringify(diary));
            const modal = bootstrap.Modal.getOrCreateInstance(document.getElementById('addDishModal')) 
            modal.hide()


        },
        async handleAddDish(meal) {
            try {
                this.selectedMeal = meal
                const modal = new bootstrap.Modal(document.getElementById('addDishModal'));
                modal.show();
        
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        },

    },
    setup() {
        const searchInput = ref('chicken');

        const { fetchData } = useApi(searchInput.value);

        const mealList = ref([]);


        const getMealList = async () => {
            try {
                console.log(searchInput.value)
                const data = await fetchData();
                console.log(data)
                mealList.value = data.hits || [];
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        onMounted(() => {
            getMealList();
        });

        return {
            searchInput,
            mealList,
            getMealList,
            extractId,
        };
    },
    data() {
        return {
            selectedMeal: null,
        };
    },

};
</script>

  
<style scoped></style>