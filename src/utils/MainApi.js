class MainApi {
  constructor({ apiUrl }) {
    this._root = apiUrl;
  }

  _checkRes(res) {
    if (res.ok) return res.json()
      else return Promise.reject(`Error ${res.status}`);
  }


  //user-related: login register patch and get
  logIn(args) {
    const body = JSON.stringify({
      "password": args.password,
      "email": args.email
    });

    return fetch(`${this._root}/signin`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: body,
    })
      .then(this._checkRes);
  }

  register(args){
    const body = JSON.stringify({
      "password": args.password,
      "email": args.email,
      "name": args.name
    });

    return fetch(`${this._root}/signup`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: body,
    })
      .then(this._checkRes);
  }

  getUser() {
    return fetch(`${this._root}/users/me`, {
      method: 'GET',
      headers: {
        "authorization": `Bearer ${localStorage.getItem('token')}`,
        "Content-Type": "application/json",
      },
    })
      .then(this._checkRes);
  }

  patchUser(args) {
    const body = JSON.stringify({
      "name": args.name,
      "email": args.email
    });

    return fetch(`${this._root}/users/me`, {
      method: 'PATCH',
      headers: {
        "authorization": `Bearer ${localStorage.getItem('token')}`,
        "Content-Type": "application/json",
      },
      body: body,
    })
      .then(this._checkRes);
  }

  //movies-related: getall post delete
  getMovies() {
    return fetch(`${this._root}/movies`, {
      method: 'GET',
      headers: {
        "authorization": `Bearer ${localStorage.getItem('token')}`,
        "Content-Type": "application/json",
      }
    })
    .then(this._checkRes);
  }

  postMovie(args) {
    const body = JSON.stringify(args);
    return fetch(`${this._root}/movies`, {
      method: 'POST',
      headers: {
        "authorization": `Bearer ${localStorage.getItem('token')}`,
        "Content-Type": "application/json",
      },
      body: body
    })
    .then(this._checkRes);
  }

  deleteMovie(args) {
    const id = args._id;
    return fetch(`${this._root}/movies/${id}`, {
      method: 'DELETE',
      headers: {
        "authorization": `Bearer ${localStorage.getItem('token')}`,
        "Content-Type": "application/json",
      },
    })
    .then(this._checkRes);
  }
}

const mainApi = new MainApi({ apiUrl: 'https://api.moredomains.nomoredomains.sbs'});
export default mainApi;