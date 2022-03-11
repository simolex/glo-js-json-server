import { render } from "./render";
export const addUser = () => {
  const form = document.querySelector("form");
  const nameInput = document.getElementById("form-name");
  const emailInput = document.getElementById("form-email");
  const childrenSwitch = document.getElementById("form-children");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!form.dataset.edit) {
      const user = {
        name: nameInput.value,
        email: emailInput.value,
        children: childrenSwitch.checked,
        permissions: false,
      };
      userService.addUser(user).then(() => {
        userService.getUsers().then((users) => {
          render(users);
          form.reset();
        });
      });
    }
  });
};
