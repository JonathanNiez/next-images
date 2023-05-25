import { atom } from "nanostores";

export const userIsLoggedIn$ = atom(false);

export const userInfo$ = atom({
  email: "",
  username: "",
});
