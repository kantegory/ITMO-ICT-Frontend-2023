import axios from 'axios';

const apiUrl = 'http://localhost:3001';

export function useApi() {
  const fetchProjects = async () => {
    try {
      const response = await axios.get(`${apiUrl}/projects`);
      return response.data;
    } catch (error) {
    }
  };

  return {
    fetchProjects,
  };
}
