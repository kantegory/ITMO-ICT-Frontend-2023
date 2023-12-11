export class CalculationApi {
  constructor(api) {
    this.api = api;
  }


  async getCalculations() {
    return this.api({
      url: `/calculations`,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }


  async postCalculation(data) {
    return this.api({
      url: `/calculations`,
      method: 'POST',
      data,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
