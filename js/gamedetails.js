export function showGameDetails() {
    const gameCards = document.querySelectorAll('.game-card');
    const gameDetailsSection = document.querySelector('.game-details-section');
    const gamesSection = document.querySelector('.games-section');
    const singleDetailCard = document.querySelector('.single-detail-card');
    const loading = document.querySelector('.loading');

    

    gameCards.forEach(card => {
        card.addEventListener('click', async function () {
            loading.style = 'visibility: visible;';
            const gameId = this.getAttribute('data-game-id');
            console.log(`Game ID: ${gameId}`);
            const options = {
                method: 'GET',
                headers: {
                    'x-rapidapi-key': 'Xm2utIS5TcmshgiDHQn7o1AwTlcGp1b7npDjsnltoIVZtekfNN',
                    'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
                }
            };
            const url = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${gameId}`, options);
            const response = await url.json();
            console.log(response);
            loading.style = 'visibility: hidden;';
            singleDetailCard.innerHTML = `
                <div class="col-md-4">
        <img src="${response.thumbnail}" class="w-100 rounded" alt="${response.title}">
      </div>
      <div class="col-md-8">
        <h1 class="fs-2 mb-4">${response.title}</h1>

        <div class="mb-3">
          <h5>Category: <span class="bg-success rounded text-light p-1">${response.genre}</span></h5>
        </div>
        <div class="mb-3">
          <h5>Platform: <span class="bg-success rounded text-light p-1">${response.platform}</span></h5>
        </div>
        <div class="mb-3">
          <h5>Status: <span class="bg-success rounded text-light p-1">${response.status}</span></h5>
        </div>

        <p class="mb-4">
            ${response.description}
        </p>

        <a href="${response.game_url}" target="_blank" rel="noopener noreferrer" class="text-decoration-none bg-success text-light p-3 rounded fs-6 d-inline-block">Visit Game Website</a>
      </div>
            `;

            gameDetailsSection.style = 'display: block;';
            gamesSection.style = 'display: none;';

        });
    });
}