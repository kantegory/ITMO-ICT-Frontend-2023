export class DeezerApi {
    constructor(api) {
        this.api = api;
    }

    async search(query) {
        const apiKeys = await fetch('@/assets/API_KEY.JSON').then(r => r.json());

        const options = {
            method: 'GET',
            url: 'https://deezerdevs-deezer.p.rapidapi.com/search',
            params: {q: query},
            headers: apiKeys
        };
        
        return this.api(options);
    }
}