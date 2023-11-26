const localStorageData = localStorage.getItem('calorieHistory');
const calorieHistory = JSON.parse(localStorageData);

const calorieData = [1500, 1600, 1400, 1800, 1700, 1900, 2000];
function displayCalorieChart() {
    let calorieData;
    if (calorieHistory.length >= 7) {
        calorieData = calorieHistory.slice(-7);
    } else {
        calorieData = calorieHistory;
    }
    let calorieData2 = [];

    
    calorieData.forEach(item => {
        calorieData2.push(parseInt(item.caloriesNeeded));
    });
    let ctx = document.getElementById('calorieChart').getContext('2d');
    let calorieChart = new Chart(ctx, {
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
                pointHitRadius: 10
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

function showResult() {

    const lastItem = calorieHistory[calorieHistory.length - 1].caloriesNeeded;

    const maintainWeightElement = document.getElementById('maintain-weight');
    maintainWeightElement.textContent = parseInt(lastItem);
    const loseWeightElement = document.getElementById('lose-weight');
    loseWeightElement.textContent = parseInt(lastItem * 0.8);
    const gainWeightElement = document.getElementById('gain-weight');
    gainWeightElement.textContent = parseInt(lastItem * 1.2);
}
