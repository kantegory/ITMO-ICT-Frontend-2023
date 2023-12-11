export class AuthApi {
  constructor(api) {
    this.api = api
  }

  async login(data) {
    return this.api({
      url: '/login',
      method: 'POST',
      data,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  async signUp(data) {
    return this.api({
      url: '/register',
      method: 'POST',
      data,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

}