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
}
