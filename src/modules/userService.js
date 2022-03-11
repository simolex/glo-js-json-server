export class UserService {
  constructor(baseUrl) {
    this._baseUrl = new URL("/users/", baseUrl).href;
  }

  _getURL(id = "", options = {}) {
    const url = new URL(`./${id}`, this._baseUrl);
    for (let nameOption in options) {
      url.searchParams.append(nameOption, options[nameOption]);
    }
    return url.href;
  }

  _getData(id, options) {
    const urlHref = this._getURL(id, options);
    return fetch(urlHref)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error(res.statusText);
        }
      })
      .catch((err) => {
        console.log(`${urlHref} - ${err.message}`);
      });
  }
  _setData({ method, id, data, options }) {
    const urlHref = this._getURL(id, options);
    const fetchOptions = {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
    };
    if (data) {
      fetchOptions["body"] = JSON.stringify(data);
    }
    return fetch(urlHref, fetchOptions)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error(res.statusText);
        }
      })
      .catch((err) => {
        console.log(`${urlHref} - ${err.message}`);
      });
  }

  getUsers() {
    return this._getData();
  }

  addUser(user) {
    return this._setData({ method: "POST", data: user });
  }

  removeUser(id) {
    return this._setData({ id: id, method: "DELETE" });
  }

  changeUser(id, data) {
    return this._setData({ id: id, method: "PATCH", data: data });
  }
  getUser(id) {
    return this._getData(id);
  }

  editUser(id, user) {
    return this._setData({ id: id, method: "PUT", data: user });
  }

  filterUsers(filterOptions) {
    const filter = {};
    filter[filterOptions] = true;
    return this._getData("", filter);
  }

  getSortUsers(sortOptions, sort) {
    return this._getData("", {
      _sort: sortOptions.name,
      _order: sortOptions.value,
    });
  }

  getSearchUsers(str) {
    return this._getData("", {
      name_like: str,
    });
  }
}
