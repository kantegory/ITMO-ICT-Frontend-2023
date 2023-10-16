function displayHistory() {
    const historyElement = document.getElementById('history');
    const history = JSON.parse(localStorage.getItem('calorieHistory')) || [];

    if (history.length === 0) {
        historyElement.innerHTML = 'No history available.';
        return;
    }

    let historyHTML = '';
    history.forEach((item, index) => {
        historyHTML += `
        <div class="col">
            <div class="card mb-4">
                <div class="card-body ">
                    <div class="history-header">
                        <strong>#${index + 1}</strong>
                        <span class="history-date">${item.date}</span>
                    </div>
                    <div class="history-details">
                        <p><strong>Calories Needed:</strong> ${item.caloriesNeeded} kcal</p>
                    </div>
                </div>
            </div>
        </div>
    `;
    });

    historyElement.innerHTML = historyHTML;
}

window.onload = function () {
    displayHistory();
};