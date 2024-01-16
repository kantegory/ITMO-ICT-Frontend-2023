<template>
    <div class="wrapper">
        <div class="container mt-5">

            <div class="d-flex flex-column align-items-center mb-5">
                <h1 class="pt-3 font-title-2 font-semibold">Sign up</h1>
            </div>

            <form @submit.prevent="SignUp">
                <div class="mb-3">
                    <label for="name">Your name: </label>
                    <input type="text" class="form-control" id="name" placeholder="Enter your name">
                </div>

                <div class="mb-3">
                    <label for="username">Username: </label>
                    <input type="text" class="form-control" id="username" placeholder="Enter your username">
                </div>

                <div class="mb-3">
                    <label for="password" class="form-label fw-bold">Password</label>
                    <input type="password" class="form-control" id="password"
                        placeholder="Enter your password">
                </div>

                <div class="text-center">
                    <button type="submit" class="btn btn-primary">Sign up</button>
                </div>

                <!-- or -->
                <div class="d-flex items-center justify-content-between my-2">
                    <div style="width: 45%" class="p-1 login-orline">
                        <hr>
                    </div>
                    <span class="p-1 login-orline">or</span>
                    <div style="width: 45%" class="p-1 login-orline">
                        <hr>
                    </div>
                </div>

                <!-- sign up with -->
                <div class="d-flex flex-column">
                    <button class="d-flex login-button2 form-label justify-content-between mb-2" type="button">
                        <FB />
                        <div class="fw-light fs-6">Facebook</div>
                        <div></div>
                    </button>
                    <button class="d-flex login-button3 form-label justify-content-between" type="button">
                        <GG />
                        <div class="fw-light fs-6">Google</div>
                        <div></div>
                    </button>
                </div>





            </form>

        </div>
    </div>
</template>
  
<script>
import 'bootstrap/dist/css/bootstrap.min.css';
import { mapActions, mapState } from 'pinia'
import FB from './icons/Facebook.vue';
import GG from './icons/Google.vue';
import authStore from '@/stores/authStore'
export default {
    name: 'SignUpForm',
    components: {
        FB,
        GG
    },
    data() {
        return {
            form: {
                name : '',
                username: '',
                password: '',
            }
        }
    },
    computed: {
        ...mapState(authStore, ['user', 'accessToken'])
    },
    methods: {
        ...mapActions(authStore, ['signUp']),
        async SignUp() {
            const router = this.$router;
            const response = await this.signUp(this.form)
            const {id,  accessToken, user } = response.data
            localStorage.accessToken = accessToken
            localStorage.user = JSON.stringify(user)
            if (id) router.push('/')
            else router.push('/signup')
        },
    
    },

}

</script>
  
<style scoped></style>