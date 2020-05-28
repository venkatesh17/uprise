import { IS_LOGIN, USER_NAME, USER_PASSWORD } from "./action-type";
import User from "../tools/user-service";

export const userNameChange = username => {
  const type = USER_NAME;
  return { type, username };
};
export const userPasswordChange = password => {
  const type = USER_PASSWORD;
  return { type, password };
};
export const userLogin = (token, username) => {
  const type = IS_LOGIN;
  User.setToken(token);
  User.setUserInfo(username);
  return { type, token };
};

export const userClear = () => {
  const type = IS_LOGIN;
  User.clearData();
  return { type, token: null };
};

export const userLoginSubmit = (username, password) => {
  return dispatch => {
    if (User.loginAttempt(username, password)) {
      dispatch(userLogin(Math.random(), username));
    }
  };
};

export const userLogout = () => {
  return dispatch => {
    dispatch(userClear());
  };
};
