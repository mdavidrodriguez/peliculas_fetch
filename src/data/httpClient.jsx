const API = "https://api.themoviedb.org/3";
export function get(path) {
  return fetch(API + path, {
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMmE0MmRhYmI2ZTVmOTg2Mzk5MmExOGRhMzdlYWZhNCIsInN1YiI6IjY0MjljMzA0YjM5ZTM1MDA3N2NjNDkzNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.p_6n4Zjesznx7dC3Z-hD0NvQQ2Qhi9PUNIFkS5MLhuU`,
      "Content-Type": "application/json;charset=utf-8",
    },
  }).then((result) => result.json());
}
