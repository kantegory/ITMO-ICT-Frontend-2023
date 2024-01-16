<template>
    <div class="d-flex flex-row justify-content-start mb-3">
        <label class="w-25">Gender</label>
        <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadio" v-model="gender" value="men" checked>
            <label class="form-check-label me-5" for="flexRadioMen">
                Men
            </label>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadio" v-model="gender" value="women">
            <label class="form-check-label" for="flexRadioWomen">
                Women
            </label>
        </div>
    </div>
</template>
<script>
</script>