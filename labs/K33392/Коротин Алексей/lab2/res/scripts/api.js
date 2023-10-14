import axios from 'https://cdn.jsdelivr.net/npm/axios@1.5.1/+esm';

const apiKeys = await fetch("/res/API_KEY.json")
                .then((r) => r.json());

export const search = async (query) => {
    const options = {
        method: 'GET',
        url: 'https://deezerdevs-deezer.p.rapidapi.com/search',
        params: {q: query},
        headers: apiKeys
    };

    return await axios.request(options);
};
