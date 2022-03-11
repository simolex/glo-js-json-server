import { render } from "./render";

export const changePermission = () => {
  const tBody = document.getElementById("table-body");
  tBody.addEventListener("click", (e) => {
    const checkBtn = e.target.closest(".form-check-input");
    if (checkBtn) {
      const tr = e.target.closest("tr");
      const id = tr.dataset.key;
      userService.changeUser(id, { permissions: checkBtn.checked }).then(() => {
        userService.getUsers().then((users) => {
          render(users);
        });
      });
    }
  });
};
