
<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h2 class="recipe-title">Information</h2>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <label for="meal-type">Select Meal Type:</label>
                <select id="meal-type" class="form-select">
                    <option value="Breakfast">Breakfast</option>
                    <option value="Lunch">Lunch</option>
                    <option value="Dinner">Dinner</option>
                </select>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <label for="meal-date">Select Date:</label>
                <input type="date" id="meal-date" class="form-control">
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    
};
</script>
  
<style scoped></style>
  