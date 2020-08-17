import { combineReducers } from "redux";
import user from "./user_reducer";

/*스토어 안에 REDUCER가 여러 개 있을 수 있음.
STATE의 종류가 여러개 있을 수 있기 때문임.
우리는 combineReducer를 이용해 rootReducer로 합쳐줌.
*/
const rootReducer = combineReducers({
  user,
});

export default rootReducer;
