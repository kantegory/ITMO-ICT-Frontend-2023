// eslint-disable-next-line no-unused-vars
import axios from 'axios'

const apiURL = 'http://localhost:3000'

const instance = axios.create({
    baseURL: apiURL
})
// Add a request interceptor
instance.interceptors.request.use(function (config) {
    // Do something before request is sent
    console.log("request: " + JSON.stringify(config))
    return config;
}, function (error) {
    // Do something with request error
    console.log("request err: " + JSON.stringify(error))
    return Promise.reject(error);
});

// Add a response interceptor
instance.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    console.log("response:" + JSON.stringify(response))
    return response;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    console.log("response err:" + JSON.stringify(error))
    return Promise.reject(error);
});
export default instance
