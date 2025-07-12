import { showGameDetails } from './gamedetails.js';
const gameList = document.querySelector('.all-games');
const loading = document.querySelector('.loading');

loading.style = 'visibility: visible;';

export async function getGames(genre){
    const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'Xm2utIS5TcmshgiDHQn7o1AwTlcGp1b7npDjsnltoIVZtekfNN',
		'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
	}
};

// make defult genre to be mmorpg if no genre is provided
if (!genre) {
    genre = 'mmorpg';
}
    const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?platform=browser&category=${genre}`, options);
    const response = await api.json();
    console.log(response);
    loading.style = 'visibility: hidden;';

    displayGames(response);
}

export function displayGames(games) {

    let gameContainer = '';
    let gameIDs = [];
    console.log(games.length);
    for (let i = 0; i < games.length; i++) {
        gameContainer += `
            <div class="game-card  col-md-4" role="button" data-game-id="${games[i].id}">
              <div class="card h-100">
                <img src="${games[i].thumbnail}" class="card-img-top w-100" alt="${games[i].title}">
                <div class="card-body">
                    <div class="card-main-content d-flex justify-content-between pt-3">
                      <h5 class="card-title w-75">${games[i].title}</h5>
                      <h5 class="bg-success rounded text-light p-1 fs-6">Free</h5>
                    </div>
                    <p class="card-text">${games[i].short_description}</p>
                    <div class="card-main-content d-flex justify-content-between border-top pt-4">
                      <h5 class="bg-dark rounded text-light p-1 fs-6">${games[i].genre}</h5>
                      <h5 class="bg-dark rounded text-light p-1 fs-6">${games[i].platform}</h5>
                    </div>
                </div>
              </div>
            </div>
        `;
        gameIDs.push(games[i].id);

    }
    gameList.innerHTML = gameContainer;
    showGameDetails();
}
