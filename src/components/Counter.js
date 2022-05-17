import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";

import { counterActions } from "../store";

const Counter = () => {
  const count = useSelector((state) => state.count.count);
  const toggle = useSelector((state) => state.count.showCounter);
  const dispatch = useDispatch();
  const counterHandler = (amount = 1) => {
    dispatch(counterActions.increment(amount), []);
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle(), []);
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {toggle && <div className={classes.value}>{count}</div>}
      <button
        onClick={() => {
          counterHandler();
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          counterHandler(-1);
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          counterHandler(5);
        }}
      >
        +5
      </button>
      <button onClick={toggleCounterHandler}>Toggle counter</button>
    </main>
  );
};

export default Counter;
