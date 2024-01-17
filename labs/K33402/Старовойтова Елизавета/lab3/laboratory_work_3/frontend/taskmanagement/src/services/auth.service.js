import axios from 'axios';

const API_URL = 'http://localhost:8000/auth/';
const API_URL_USER = 'http://localhost:8000/api/';

class AuthService {
  login(user) {
    return axios
      .post(API_URL + 'token/login/', {
        username: user.username,
        password: user.password
      })
      .then(async response => {
        if (response.status === 200) {
          const data = await response.data;
          const authToken = response.data.auth_token;
          localStorage.setItem('user', JSON.stringify(authToken));

          return response.data.auth_token;
        } else if (response.status === 400) {
          const errors = await response.data;
          if (typeof errors === 'object') {
            errorMessages.value = Object.values(errors).flat();
          } else {
            errorMessages.value = [errors];
          }
        }
        else {
        }
      });
  }

  logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('id');
    localStorage.removeItem('username');
  }

  register(user) {
    return axios.post(API_URL + 'users/', {
      username: user.username,
      password: user.password
    });
  }

  fetchUserId() {
    return axios
      .get(`${API_URL_USER}user/me`, {
        headers: {
          Authorization: `Token ${JSON.parse(localStorage.getItem('user'))}`
        }
      })
      .then(async response => {
        if (response.status === 200) {
          localStorage.setItem("id", response.data.id)
          localStorage.setItem("username", response.data.username)
          return response.data;
        } else if (response.status === 400) {
          const errors = await response.data;
          if (typeof errors === 'object') {
            errorMessages.value = Object.values(errors).flat();
          } else {
            errorMessages.value = [errors];
          }
        }
        else {
        }
      });
  }
}

export default new AuthService();
