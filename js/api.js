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
        "Hollow Knight: Silksong & Soundtrack Bundle",
        "Mark of the Ninja",
        "Invisible, Inc.",
        "Shank 2",
        "Terraria: Otherworld",
        "Untitled game by Playdead",
        "Don't Starve: Pocket Edition",
        "Rotwood",
        "Eets: Chowdown",
        "Griftlands",
        "Hot Lava",
        "Eets",
        "Mark of the Ninja: Remastered",
        "Eets Munchies",
        "Oxygen Not Included",
        "Shank",
        "ConcernedApe's Haunted Chocolatier",
    ];
    try {
        const response = await fetch (`${BASE_URL}games?key=${API_KEY}&developers=amanita-design,team-cherry,playdead,klei-entertainment,concernedape,re-logic&page_size=50`);

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