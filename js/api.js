import { API_KEY } from './config.js';

const BASE_URL = 'https://api.rawg.io/api/';

export const getAmanitaGames = async () => {
    const blacklist = [
        "Phonopolis", 
        "The Quest for the Rest",
        "Questionaut",
        "Rocketman VC",
        "Osada", 
        "Samorost 3 Demo",
        "Happy Game :)",
        "Botanicula",
        "Samorost 3", 
    ];
    try {
        const response = await fetch (`${BASE_URL}games?key=${API_KEY}&developers=amanita-design,team-cherry`);

        const data = await response.json();

        const allGames = data.results;
            
        const filteredGames = allGames.filter(game => 
            !blacklist.includes(game.name)
        );
        return filteredGames;    
    }
    catch (error) {

        console.error("fetch error", error);
    }

}