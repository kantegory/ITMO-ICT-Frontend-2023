<template>
    <div class="d-flex flex-row mb-3">
        <label class="w-25">Activity</label>
        <select class="form-select w-75" aria-label="Default select example" v-model.number="activityLevel">
            <option selected value="0">Sedentary (office job)</option>
            <option value="1">Light excercise (1-2 days/week)</option>
            <option value="2">Moderate excercise (3-5 days/week)</option>
            <option value="3">Heavy excercise (6-7 days/week)</option>
            <option value="4">Athlete (2x per day)</option>
        </select>
    </div>
</template>
<script>
</script>