import { render } from "./render";

export const removeUser = () => {
  const tBody = document.getElementById("table-body");
  tBody.addEventListener("click", (e) => {
    if (e.target.closest(".btn-remove")) {
      const tr = e.target.closest("tr");
      const id = tr.dataset.key;

      userService.removeUser(id).then(() => {
        userService.getUsers().then((users) => {
          render(users);
        });
      });
    }
  });
};
