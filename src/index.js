import { render } from "./modules/render";
import { addUser } from "./modules/addUser";
import { removeUser } from "./modules/removeUser";
import { changePermission } from "./modules/changePermission";
import { editUser } from "./modules/editUser";
import { filterUsers } from "./modules/filterUsers";
import { sortUsers } from "./modules/sortUsers";
import { searchUsers } from "./modules/searchUsers";
import { UserService } from "./modules/userService";

window.userService = new UserService();

userService.getUsers().then((data) => {
  render(data);
});

addUser();
removeUser();
changePermission();
editUser();
filterUsers();
sortUsers();
searchUsers();
