import { defineStore } from 'pinia';
import { diaryApi } from '@/api';

const diaryStore = defineStore('diary', {
  state: () => ({
    diaries: [],
  }),

  actions: {
    async getDiaries({ username, options }) {
      try {
        const response = await diaryApi.getDiaries(username, options);
        this.diaries = response.data;
        return response.data;
      } catch (error) {
        console.error('Error fetching diaries:', error);
        throw error;
      }
    },

    async postDiary({ username, data }) {
      try {
        const response = await diaryApi.postDiary(username, data);
        await this.getDiaries({ username }); 
        return response.data;
      } catch (error) {
        console.error('Error posting diary:', error);
        throw error;
      }
    },
  },
});
export default diaryStore