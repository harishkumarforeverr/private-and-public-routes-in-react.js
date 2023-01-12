const TOKEN_KEY = "TOKEN_KEY";
export const LOGIN_CONSTANT = "LOGIN_CONSTANT";
export const login = () => {
  localStorage.setItem(TOKEN_KEY, "TokenKey");
};
export const setUser = (user) => {
  localStorage.setItem(LOGIN_CONSTANT, user);
};
export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(LOGIN_CONSTANT);
};

export const isLogin = () => {
  if (localStorage.getItem(TOKEN_KEY)) {
    return true;
  }

  return false;
};
