import { useState } from 'react';

export function Counter() {
  const [counter, setCounter] = useState(0);

  const increment = () =>  {
    setCounter(counter + 1);
  }

  return (
    <div>
      <h3>Value: {counter} </h3>
      <button type="button" onClick={increment}>Increment</button>
    </div>
  );
}