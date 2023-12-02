<template>
    <q-page>
        <div class="q-pa-md column flex-center">
            <p class="text-h3">Login</p>
            <q-form ref="form" @submit.prevent="login" class="login-container q-gutter-y-md column">
                <q-input class="input-field" type="text" v-model="form.login" label="Login"
                    placeholder="example@example.com" error-message="Please enter a valid email"
                    :rules="[val => isValidEmail(val) || 'Invalid email address']"></q-input>
                <q-input class="input-field" type="password" v-model="form.password" label="Password"></q-input>
                <q-btn type="submit" color="secondary">Login</q-btn>
                <p class="text-subtitle1">Don't have an account? <router-link to="/auth/register">Sign up</router-link></p>
            </q-form>
        </div>
    </q-page>
</template>
<script>

import { authStore } from '@/stores/authStore'
import { Notify } from 'quasar'

export default {

    data() {
        return {
            form: {
                login: '',
                password: ''
            }
        }
    },

    methods: {
        login() {
            authStore().login(this.form)
                .catch((reason) => {
                    if (reason.response.status === 404) {
                        Notify.create({ message: "Invalid login or password", position: "top" });
                    }
                    else {
                        Notify.create({ message: "Server is not available right now." })
                    }

                })
        },

        isValidEmail(email) {
            const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return regex.test(email);
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