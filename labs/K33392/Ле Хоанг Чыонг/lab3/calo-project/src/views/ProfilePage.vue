<template>

    <div class="container-fluild">
        <div class="container">
            <div class="row align-items-stretch mb-4">
                <div class="col-md-3">
                    <div class="border rounded p-3 h-100">
                        <div class="text-center mb-3">
                            <img src="../assets/profile.jpg" alt="Avatar" class="img-fluid rounded-circle">
                        </div>
                    </div>
                </div>
                <div class="col-md-9">
                    <div class="border rounded p-3 h-100">
                        <div class="mb-3">
                            <UserItem/>
                            <p id="username" style="font-size: 25px; display: inline-block; margin-left: 10px; margin-right: 5px;">
                                Hoang Truong
                            </p>
                        </div>
                        <div class="mb-3">
                            <EmailItem/>
                            <p id="email" style="display: inline-block; margin-left: 10px;">natibatian@gmail.com</p>
                        </div>
                        <div class="mb-3">
                            <BirthdayItem/>
                            <p id="age" style="display: inline-block; margin-left: 10px;">23</p>
                        </div>
                        <div class="mb-3">
                            <SexItem/>
                            <p id="gender" style="display: inline-block; margin-left: 10px;">Male</p>
                        </div>
                        <div class="text-center">
                            <a href="#" class="btn btn-primary">Edit Profile</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div id="history"></div>
            </div>
        </div>
    </div>
</template>

<script>

import BirthdayItem from "../components/icons/BirthdayItem.vue"
import EmailItem from "../components/icons/EmailItem.vue"
import SexItem from "../components/icons/SexItem.vue"
import UserItem from "../components/icons/UserItem.vue"
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
                        <strong class="history-index">#${index + 1}</strong>
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
export default {
    name: 'ProfilePage',
    components: {
     
        BirthdayItem,
        EmailItem,
        SexItem,
        UserItem
    },
    mounted() {
        displayHistory()
    }
}
</script>

<style scoped>
.container-fluild {
    margin-top: 80px;
    
}
.mb-3 {
    display: flex;
    align-items: baseline;
}

.mb-3 p {
    margin-left: 10px;
}

.mb-3 > div {
    margin-right: 10px; 
}
:deep(.history-box) {
    border: 1px solid #ccc;
    padding: 10px;
    margin: 10px 0;
    background-color: #f5f5f5;
    border-radius: 10px;
}

:deep(.history-header) {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

:deep(.history-header strong) {
    font-size: 18px;
    margin-right: 10px;
}

:deep(.history-date) {
    font-size: 14px;
    color: #666;
}

:deep(.history-details) {
    margin-top: 10px;
}
:deep(.card:hover) {
    transform: scale(1.02);

}


</style>
