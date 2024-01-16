
export function useApiRecipe(endpoint) {
    const apiUrl = `https://api.edamam.com/api/recipes/v2/${endpoint}?type=public&app_id=4937ba86&app_key=fff56f4c2af9b872d247b655b03cbf43`;
    console.log(endpoint)
    const fetchRecipe = async () => {
        try {
            const response = await fetch(apiUrl);
            const data = await response.json();

            return data;
        } catch (error) {
            console.error('API Error:', error);
            throw new Error('Failed to fetch data from the API');
        }
    };

    return { fetchRecipe };
}
