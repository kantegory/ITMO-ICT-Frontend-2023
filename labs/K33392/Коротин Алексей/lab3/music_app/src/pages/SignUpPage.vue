<template>
    <div class="container q-pa-md column flex-center bg-primary">
        <p class="text-h3">Sign up</p>
        <q-form ref="form" @submit.prevent="trySignUp" class="login-container q-gutter-y-md column">
            <q-input label-color="white" input-class="input-field" type="text" v-model="form.email" label="Login"
                placeholder="example@example.com" error-message="Please enter a valid email"
                :rules="[val => isValidEmail(val) || 'Invalid email address']"></q-input>
            <q-input label-color="white" input-class="input-field" type="password" v-model="form.password" label="Password"
                error-message="Should be at least 6 characters" :rules="[val => isValidPassword(val)]"></q-input>
            <q-input label-color="white" input-class="input-field" type="password" v-model="form.passwordRepeat"
                label="Repeat password" error-message="Passwords don't match" :rules="[() => passwordMatch()]"></q-input>
            <q-btn text-color="primary" type="submit" color="secondary">Sign up</q-btn>
            <p class="text-subtitle1">Alreay have an account? <router-link to="/auth/login">Log in</router-link></p>
        </q-form>
    </div>
</template>
<script>

import { emailValidator } from '@/mixins/email'
import { authStore } from '@/stores/authStore'
import { mapActions, mapState } from 'pinia'
import { Notify } from 'quasar'

export default {

    mixins: [emailValidator],

    data() {
        return {
            form: {
                email: '',
                password: '',
                passwordRepeat: ''
            }
        }
    },

    computed: {
        ...mapState(authStore, ['user', 'accessToken'])
    },

    methods: {
        ...mapActions(authStore, ['signUp']),

        async trySignUp() {
            if (!(this.isValidEmail(this.form.email) && this.isValidPassword(this.form.password) && this.passwordMatch())) {
                return
            }
            const router = this.$router;

            const response = await this.signUp(this.form)
                .then((r) => {
                    router.push({ path: '/collection' })
                })
                .catch((reason) => {
                    if (!reason.response) {
                        return;
                    }
                    if (reason.response.status === 400) {
                        Notify.create({ message: "This email is occupied", position: "top" });
                    }
                    else {
                        Notify.create({ message: "Server is not available right now.", position: "top" })
                    }
                });
        },

        isValidPassword(p) {
            return p.length >= 6
        },

        passwordMatch() {
            return this.form.password === this.form.passwordRepeat;
        }
    },
}
</script>
<style lang="scss">
@import '@/css/quasar.variables.scss';

.login-container {
    width: 70%;
    max-width: 500px;
}

.input-field {
    font-size: 20px;
    color: $text;
}
</style>