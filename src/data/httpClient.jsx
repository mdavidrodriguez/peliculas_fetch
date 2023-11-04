const API = "https://api.themoviedb.org/3";
export function get(path) {
  return fetch(API + path, {
    headers: {
      Authorization: `Bearer ${import.meta.env.API_KEY_URL}`,
      "Content-Type": "application/json;charset=utf-8",
    },
  }).then((result) => result.json());
}
