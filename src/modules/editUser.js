import { render } from "./render";

export const editUser = () => {
  const tBody = document.getElementById("table-body");
  const form = document.querySelector("form");
  const nameInput = document.getElementById("form-name");
  const emailInput = document.getElementById("form-email");
  const childrenSwitch = document.getElementById("form-children");
  let checkBtn;

  tBody.addEventListener("click", (e) => {
    if (e.target.closest(".btn-edit")) {
      const tr = e.target.closest("tr");
      const id = tr.dataset.key;
      checkBtn = tr.querySelector(".form-check-input");

      userService.getUser(id).then((user) => {
        nameInput.value = user.name;
        emailInput.value = user.email;
        childrenSwitch.checked = user.children;

        // userService.getUsers().then((users) => {
        //   render(users);
        // });
        form.dataset.edit = id;
      });
    }
  });
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (form.dataset.edit) {
      const user = {
        name: nameInput.value,
        email: emailInput.value,
        children: childrenSwitch.checked,
        permissions: checkBtn.checked,
      };
      userService.editUser(form.dataset.edit, user).then(() => {
        userService.getUsers().then((users) => {
          render(users);
          form.reset();
          form.removeAttribute("data-edit");
        });
      });
    }
  });
};
