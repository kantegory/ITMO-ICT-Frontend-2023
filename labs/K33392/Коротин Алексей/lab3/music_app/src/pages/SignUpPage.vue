<template>
    <q-page>
        <div class="q-pa-md column flex-center">
            <p class="text-h3">Sign up</p>
            <q-form ref="form" @submit.prevent="signUp" class="login-container q-gutter-y-md column">
                <q-input class="input-field" type="text" v-model="form.login" label="Login"
                    placeholder="example@example.com"></q-input>
                <q-input class="input-field" type="password" v-model="form.password" label="Password"></q-input>
                <q-input class="input-field" type="password" v-model="form.passwordRepeat" label="Repeat password"></q-input>
                <q-btn color="secondary">Sign up</q-btn>
                <p class="text-subtitle1">Alreay have an account? <router-link to="/auth/login">Log in</router-link></p>
            </q-form>
        </div>
    </q-page>

</template>
<script>
export default {
    data() {
        return {
            form: {
                login: '',
                password: '',
                passwordRepeat: ''
            }
        }
    },

    methods: {
        signUp() {
            
        }
    },
}
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