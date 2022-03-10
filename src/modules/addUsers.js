import { render } from "./render";
export const addUsers = () => {
  const form = document.querySelector("form");
  const nameInput = document.getElementById("form-name");
  const emailInput = document.getElementById("form-email");
  const childrenSwitch = document.getElementById("form-children");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const user = {
      name: nameInput.value,
      email: emailInput.value,
      children: childrenSwitch.checked,
      permissions: false,
    };
    userService.addUser(user).then(() => {
      userService.getUsers().then((users) => {
        render(users);
      });
    });
  });
};
