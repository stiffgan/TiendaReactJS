export const ACTIONS_LOGIN = {
  LOGIN: "LOGIN_SESSION",
  SAVE: "SAVE_SESSION",
};

export const loginSession = () => {
  return {
    type: ACTIONS_LOGIN.LOGIN,
  };
};

export const jsonSession = (msg) => {
  return {
    type: ACTIONS_LOGIN.SAVE,
    payload: msg,
  };
};
