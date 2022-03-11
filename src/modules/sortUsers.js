import { render } from "./render";

export const sortUsers = () => {
  const sortIsChildren = document.getElementById("sort-is-children");
  let isSort = false;
  sortIsChildren.style.cursor = "pointer";
  sortIsChildren.addEventListener("click", () => {
    userService.getSortUsers({ name: "children", value: isSort ? "asc" : "desc" }).then((users) => {
      render(users);
    });
    isSort = !isSort;
  });
};
