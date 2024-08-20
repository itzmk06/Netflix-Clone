export const LOGO="https://cdn-icons-png.flaticon.com/128/5977/5977590.png";
export const LOGIN_BACK="https://assets.nflxext.com/ffe/siteui/vlv3/20bf1f4d-1c73-48fd-8689-310d6dd80efc/81bdc063-cb8f-4afe-8a02-a3131ca4ef5e/IN-en-20240812-POP_SIGNUP_TWO_WEEKS-perspective_WEB_7998f3b6-63e3-424a-8328-550cf777ddce_medium.jpg";
export const url = 'https://api.themoviedb.org/3/movie/';
export const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:import.meta.env.VITE_TMDB_TOKEN
    }
  };
