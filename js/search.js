import { displayGames } from './ui.js';
export const initSearch = (games) => {
    const searchInput = document.querySelector('.search-bar');
    const searchButton = document.querySelector('.search-button');

    const handleSearch = () => {
        const searchTerm = searchInput.value.toLowerCase().trim();

        const filteredGames = games.filter(game =>
            game.name.toLowerCase().includes(searchTerm)
        );
        displayGames(filteredGames);
    };
}