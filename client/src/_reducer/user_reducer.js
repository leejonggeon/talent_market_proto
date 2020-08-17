import { LOGIN_USER } from "../_action/types";

export default function (state = {}, action) {
  switch (action.type) {
    case LOGIN_USER:
      //...state :원래 state을 그대로 가져옴.
      return { ...state, loginSuccess: action.payload };
      break;

    default:
      return state;
  }
}
