"use client";

import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);
  return (
    <button className="bg-amber-400 p-4" onClick={() => setCount((c) => c + 1)}>
      {count}
    </button>
  );
}
