import { render } from "./render";
import { debounce } from "./helpers";

export const searchUsers = () => {
  const searchInput = document.getElementById("search-input");

  const debounceSearch = debounce(() => {
    userService.getSearchUsers(searchInput.value).then((users) => {
      render(users);
    });
  });

  searchInput.addEventListener("input", debounceSearch);
};
