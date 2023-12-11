import { defineStore } from 'pinia';
import { calculationApi } from '@/api'

export const calculationStore = defineStore('calculation', {
  state: () => ({
    calculations: [],
  }),

  actions: {
    async getCalculations() {
      try {
        const response = await calculationApi.getCalculations();
        this.$patch({
          calculations: response.data
        })
        return response.data;
      } catch (error) {
        console.error('Error fetching calculations:', error);
        throw error;
      }
    },

    async postCalculation( data ) {
      try {
        const response = await calculationApi.postCalculation(data);
      //  await this.getCalculations(); 
        return response.data;
      } catch (error) {
        console.error('Error posting calculation:', error);
        throw error;
      }
    },
  },

  mutations: {
    setCalculations(state, calculations) {
      state.calculations = calculations
    }
  },

});
export default calculationStore