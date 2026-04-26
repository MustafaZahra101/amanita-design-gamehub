import { getAmanitaGames } from './api.js';
import { displayGames } from './ui.js';
import { initSearch } from './search.js';
const init = async () => {
    console.log("Main engine starting...");

try {
    const games = await getAmanitaGames();
    if (games && games.length > 0) {
        console.log("The data has been successfully delivered to the manager.")
        displayGames(games);
        initSearch(games);

        }else {
            console.warn("No games were received. Please check your internet connection or API key.")
        }
    }
    catch (error) {
    console.error("Unexpected Runtime Error", error);

    }
};
init();