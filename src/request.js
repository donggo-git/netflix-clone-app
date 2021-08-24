const BASE_URL = 'https://api.themoviedb.org/3/'
const key = 'd03ccd3f8ae255e9b5fa0f7c48581e8c'
const type = {
    trending: `trending/all/day?api_key=${key}`,
    netflix: `discover/tv?api_key=${key}&with_networks=213`,
    action: `discover/movie?api_key=${key}&with_genres=28`,
    animation: `discover/movie?api_key=${key}&with_genres=16`,
    comedy: `discover/movie?api_key=${key}&with_genres=35`,
    drama: `discover/movie?api_key=${key}&with_genres=18`,
    honor: `discover/movie?api_key=${key}&with_genres=27`,
    crime: `discover/movie?api_key=${key}&with_genres=80`
}
export { BASE_URL, type }