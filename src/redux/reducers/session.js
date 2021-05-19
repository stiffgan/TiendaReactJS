import { ACTIONS_LOGIN } from "../actions/session";

const initialState = false;
const initialStateJsonSession = "";

export const session = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS_LOGIN.LOGIN:
      state = !state;
      return state;

    default:
      return state;
  }
};

export const jsonSession = (state = initialStateJsonSession, action) => {
  switch (action.type) {
    case ACTIONS_LOGIN.SAVE:
      return action.payload;

    default:
      return state;
  }
};

export default { session, jsonSession };
