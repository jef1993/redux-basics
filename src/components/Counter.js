import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";

const Counter = () => {
  const count = useSelector((state) => state.count);
  const toggle = useSelector((state) => state.showCounter);
  const dispatch = useDispatch();
  const counterHandler = (type, amount = 1) => {
    dispatch({ type: type, amount: amount }, []);
  };

  const toggleCounterHandler = () => {
    dispatch({ type: "toggle" }, []);
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {toggle && <div className={classes.value}>{count}</div>}
      <button
        onClick={() => {
          counterHandler("+");
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          counterHandler("-");
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          counterHandler("+", 5);
        }}
      >
        +5
      </button>
      <button onClick={toggleCounterHandler}>Toggle counter</button>
    </main>
  );
};

export default Counter;
