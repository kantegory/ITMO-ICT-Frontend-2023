<template>
    <div class="container-fluild">
        <div class="container mt-3">
            <div class="d-flex justify-content-between align-items-center">
                <h1 class="mb-0">Diary</h1>
                <div class="row">
                    <div class="col-12">
                        <label for="meal-type" id ="meal">Select Meal Type:</label>
                        <select id="meal-type" class="form-select">
                            <option value="All">All</option>
                            <option value="Breakfast">Breakfast</option>
                            <option value="Lunch">Lunch</option>
                            <option value="Dinner">Dinner</option>
                        </select>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <label for="meal-date" id ="meal">Select Date:</label>
                        <input type="date" id="meal-date" class="form-control">
                    </div>
                </div>
                <button id="search-btn" class="btn btn-outline-success" aria-label="Search" @click="searchMeals">Search</button>

            </div>
            <hr class="line">
            <div class="row">
                <div id="diary"></div>
            </div>
        </div>
    </div>
</template>
  
<script>

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
// diary.js
function searchMeals() {
    let selectedDate = document.getElementById('meal-date').value;
    let selectedMealType = document.getElementById('meal-type').value;

    if (selectedMealType == 'All') selectedMealType = "";

    if (!window.initialDiary) {
        window.initialDiary = JSON.parse(localStorage.getItem('diary')) || [];
    }

    const diary = [...window.initialDiary];

    const filteredDiary = diary.filter((item) => {
        if (item) {
            const itemDate = item.date;
            const itemMealType = item.type;
            const dateMatch = selectedDate === "" || selectedDate === itemDate;
            const mealTypeMatch = selectedMealType === "" || selectedMealType === itemMealType;

            return dateMatch && mealTypeMatch;
        }
    });

    displayDiary(filteredDiary);
}

function displayDiary(diaryData = null) {
    let diaryElement = document.getElementById('diary');
    let diary;
    if (diaryData == null) {
        diary = JSON.parse(localStorage.getItem('diary')) || [];
    } else {
        diary = diaryData;
    }

    if (diary.length === 0) {
        diaryElement.innerHTML = 'No history available.';
        return;
    }

    const groupedDiary = {};

    diary.forEach((item) => {
        if (item) {
            const key = `${item.date}-${item.type}`;

            if (!groupedDiary[key]) {
                groupedDiary[key] = {
                    date: item.date,
                    type: item.type,
                    totalCalo: 0,
                    entries: [],
                };
            }

            groupedDiary[key].totalCalo += parseInt(item.calo);

            groupedDiary[key].entries.push(item);
        }
    });

    const groupedDiaryArray = Object.values(groupedDiary);

    groupedDiaryArray.sort((a, b) => new Date(a.date) - new Date(b.date));

    let diaryHTML = '';
    groupedDiaryArray.forEach((group) => {
        diaryHTML += `
            <div class="col">
                <div class="card mb-4">
                    <div class="card-body">
                        <div class="history-header">
                            <span class="diary-date">${group.date}</span>
                            <span class="diary-type">${group.type}</span>
                            <span class="diary-total-calo">${group.totalCalo} kcal</span>
                            <button class="btn diary-toggle-button" data-target-id="collapse-${group.date}-${group.type}">▼</button>
                        </div>
                        <div class="diary-detail" id="collapse-${group.date}-${group.type}" style="display: none;">
                            <ul>
                                ${group.entries.map((entry) => `
                                    <li class="calo"><a href="${entry.link}" target="_blank" class="text-decoration-none"><strong>${entry.name}</strong>:</a> ${parseInt(entry.calo)} kcal</li>
                                `).join('')}
                            </ul>
                        </div>


                    </div>
                </div>
            </div>
        `;
    });

    diaryElement.innerHTML = diaryHTML;

    const toggleButtons = diaryElement.querySelectorAll('.diary-toggle-button');
    toggleButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const targetId = button.getAttribute('data-target-id');
            const detailElement = document.getElementById(targetId);

            if (detailElement) {
                if (detailElement.style.display === 'none' || !detailElement.style.display) {
                    detailElement.style.display = 'block';
                    button.textContent = '▲';
                } else {
                    detailElement.style.display = 'none';
                    button.textContent = '▼';
                }
            }
        });
    });
}

export default {
    name: 'DiaryList',
    components: {

    },

    methods: {
        displayDiary,
        searchMeals
    },
    mounted() {

    }

}

</script>
  
<style scoped>

</style>