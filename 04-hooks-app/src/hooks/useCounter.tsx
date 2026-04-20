import { useState } from "react"


export const useCounter = (initialValue: number = 1) => {

  const [counter, seCounter] = useState(initialValue);

  const increment = () => {
    seCounter(counter + 1);
  }

  const decrement = () => {
    if (counter <= 1) return;

    seCounter(counter - 1);
  }

  return {

    // Props
    counter,

    // Method
    increment,
    decrement,
  };
};
