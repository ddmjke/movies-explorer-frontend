class MoviesApi {
  constructor ({ apiUrl }) {
    this._root = apiUrl;
  }

  _checkRes(res) {
    if (res.ok) return res.json()
      else return Promise.reject(`Error ${res.status}`);
  }

  getMovies() {
    return fetch(`${this._root}`)
      .then(this._checkRes);
  }
}

const moviesApi = new MoviesApi({
  apiUrl: 'https://api.nomoreparties.co/beatfilm-movies',
});

export default moviesApi;