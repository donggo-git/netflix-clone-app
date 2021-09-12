const BASE_URL = 'https://api.themoviedb.org/3/'
const key = 'd03ccd3f8ae255e9b5fa0f7c48581e8c'
const type = {
    Trending: `trending/all/day?api_key=${key}`,
    Netflix: `discover/tv?api_key=${key}&with_networks=213`,
    Action: `discover/movie?api_key=${key}&with_genres=28`,
    Animation: `discover/movie?api_key=${key}&with_genres=16`,
    Comedy: `discover/movie?api_key=${key}&with_genres=35`,
    Drama: `discover/movie?api_key=${key}&with_genres=18`,
    Honor: `discover/movie?api_key=${key}&with_genres=27`,
    Crime: `discover/movie?api_key=${key}&with_genres=80`
}
export { BASE_URL, type, key }