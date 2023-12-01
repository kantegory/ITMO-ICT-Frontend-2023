<template>
    <q-page>
        <div class="q-pa-md column flex-center">
            <p class="text-h3">Login</p>
            <form ref="form" class="login-container q-gutter-y-md column">
                <q-input class="input-field" type="text" v-model="login" label="Login"
                    placeholder="example@example.com"></q-input>
                <q-input class="input-field" type="password" v-model="password" label="Password"></q-input>
                <q-btn color="secondary">Login</q-btn>
                <p class="text-subtitle1">Don't have an account? <router-link to="/auth/register">Sign up</router-link></p>
            </form>
        </div>
    </q-page>
</template>
<script>

</script>

<style scoped>
.login-container {
    width: 70%;
    max-width: 500px;
}

.input-field {
    font-size: 20px;
}
</style>