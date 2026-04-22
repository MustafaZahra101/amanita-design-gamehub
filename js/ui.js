const createGameCard = (game) => {
    const card = document.createElement('div');
    card.className = 'game-card';

    card.innerHTML = `
        <div class="card-image">
            <img src="${game.background_image}" alt="${game.name}" loading="lazy">
        </div>
        <div class="card-content">
            <h3>${game.name}</h3>
            <div class="card-meta">
                <span>${game.rating}</span>
                <span>${game.released}</span>
            </div>
        </div>
    `;
    return card;
};
export const displayGames = (games) => {
    const container = document.getElementById('games-container');
    container.innerHTML = '';
    games.forEach(game => {
        const gameCard = createGameCard(game);
        container.appendChild(gameCard);
    })
};