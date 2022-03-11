export class UserService {
  getUsers() {
    return fetch("http://localhost:4545/users").then((res) => res.json());
  }

  addUser(user) {
    return fetch("http://localhost:4545/users", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  }

  removeUser(id) {
    return fetch(`http://localhost:4545/users/${id}`, {
      method: "DELETE",
    }).then((res) => res.json());
  }

  changeUser(id, data) {
    return fetch(`http://localhost:4545/users/${id}`, {
      method: "PATCH",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  }
  getUser(id) {
    return fetch(`http://localhost:4545/users/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  }

  editUser(id, user) {
    return fetch(`http://localhost:4545/users/${id}`, {
      method: "PUT",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  }

  filterUsers(filterOptions) {
    return fetch(`http://localhost:4545/users?${filterOptions}=true`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  }
  getSortUsers(sortOptions, sort) {
    return fetch(
      `http://localhost:4545/users?_sort=${sortOptions.name}&_order=${sortOptions.value}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => res.json());
  }
  getSearchUsers(str) {
    return fetch(`http://localhost:4545/users?name_like=${str}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  }
}
