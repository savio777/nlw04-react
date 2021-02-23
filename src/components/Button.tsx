import React, { useState, useEffect } from "react";

interface ButtonProps {
  color: string;
  children: string;
}

export default function Button({ color, children }: ButtonProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`${color}: ${count}`);
  }, [count, color]);

  const increment = () => setCount(count + 1);

  return (
    <button style={{ color }} type="button" onClick={increment}>
      {children} <strong>{count}</strong>
    </button>
  );
}
