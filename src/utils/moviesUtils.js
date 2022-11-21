import linkRegEx from "./regexes";

class MoviesUtils {
  constructor(args) {
    this._root = args.root;
    this.preSave = this.preSave.bind(this);
  }

  preSave(movie) {
    const formated = {
      country: movie.country,
      director: movie.director,
      duration: movie.duration,
      year: movie.year,
      description: movie.description,
      image: this._root + movie.image.url,
      trailerLink: linkRegEx.test(movie.trailerLink)
        ? movie.trailerLink
        : this._root + movie.image.url,
      thumbnail: this._root + movie.image.formats.thumbnail.url,
      movieId: movie.id,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN,
    }
    return formated;
  }

  searchName(movies, text, checkbox) {
    let filtered = movies || [];
    if (checkbox) {filtered = filtered.filter(movie => movie.duration <= 40)};
    if (text) {filtered = filtered.filter((movie) => {
      return movie.nameRU.toLowerCase().includes(text.toLowerCase())
        || movie.nameEN.toLowerCase().includes(text.toLowerCase());
    })}
    return filtered;
  }
}

const moviesUtils = new MoviesUtils({
  root: 'https://api.nomoreparties.co',
})

export default moviesUtils;

