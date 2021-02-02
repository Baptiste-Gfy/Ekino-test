import React, { useState } from "react";
import Styles from "../../css/Counter.module.css";

const HookCounter = () => {
  const [count, setCount] = useState(42);
  return (
    <div className={Styles.counterContent}>
      <p className={Styles.title}>Counter hook component</p>
      <h2 className={Styles.counter}> {count} </h2>
      <button
        className={Styles.counterButton}
        onClick={() => setCount(count + 1)}
      >
        Clic
      </button>
    </div>
  );
};

export default HookCounter;
