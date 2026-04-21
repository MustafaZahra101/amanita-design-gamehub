import { API_KEY } from './config.js';

const BASE_URL = 'https://api.rawg.io/api/';

export const getAmanitaGames = async () => {

    try {
        const response = await fetch (`${BASE_URL}games?key=${API_KEY}&developers=amanita-design`);

        const data = await response.json();

        return data.results;
    
    }
    catch (error) {

        console.error("fetch error", error);
    }

}