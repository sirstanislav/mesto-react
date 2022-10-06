# Project: Mesto-React

Mesto: An interactive page where you can register users, add photos, delete them, and like them.

The project is written in `HTML`, `CSS`, `JSX` using `React Fraemwork`. To building the SPA was used the `BEM` methodology. Data came from the server and was sent to it through a class component using `RestAPI`.

```JavaScript
class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
    }).then((res) => (res.ok ? res.json() : Promise.reject(res.status)));
  }

  setUserInfo(name, about) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name,
        about,
      }),
    }).then((res) => (res.ok ? res.json() : Promise.reject(res.status)));
  }

  setUserAvatar(avatar) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar,
      }),
    }).then((res) => (res.ok ? res.json() : Promise.reject(res.status)));
  }

  getCardList() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: this._headers,
    }).then((res) => (res.ok ? res.json() : Promise.reject(res.status)));
  }

  addCard(name, link) {
    return fetch(`${this._baseUrl}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name,
        link,
      }),
    }).then((res) => (res.ok ? res.json() : Promise.reject(res.status)));
  }

  deleteCard(id) {
    return fetch(`${this._baseUrl}/cards/${id}`, {
      method: "DELETE",
      headers: this._headers,
    }).then((res) => (res.ok ? res.json() : Promise.reject(res.status)));
  }

  changeLikeCardStatus(id, isLiked) {
    return isLiked
      ? fetch(`${this._baseUrl}/cards/${id}/likes`, {
          method: "PUT",
          headers: this._headers,
        }).then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
      : fetch(`${this._baseUrl}/cards/${id}/likes`, {
          method: "DELETE",
          headers: this._headers,
        }).then((res) => (res.ok ? res.json() : Promise.reject(res.status)));
  }
}

export const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-39",
  headers: {
    authorization: "787a2830-fec0-4832-b8d1-85b319400036",
    "Content-Type": "application/json",
  },
});
```

You can run use:
```
npm run start
```

<div align="center">
<a href="https://sirstanislav.github.io/mesto/" target="_blank"><img width="100%" height="auto" src="https://github.com/sirstanislav/mesto/blob/main/src/images/preview.png?raw=true"></a>
</div>

<br>

The final result is repo <a href="https://github.com/sirstanislav/react-mesto-api-full">`react-mesto-api-full`</a>
