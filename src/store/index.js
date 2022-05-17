import { createStore } from "redux";
const counterReducer = (state = { count: 0, showCounter: true }, action) => {
  if (action.type === "+")
    return { count: state.count + action.amount, showCounter: true };
  if (action.type === "-") return { count: state.count - 1, showCounter: true };
  if (action.type === "toggle")
    return { count: state.count, showCounter: !state.showCounter };
  return state;
};

const store = createStore(counterReducer);

export default store;
