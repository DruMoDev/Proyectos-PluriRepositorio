import { useEffect, useState } from "react";

export function useNumber(initialCount) {
    const [count, setCount] = useState(initialCount);
  
    useEffect(() => {
      console.log(count);
    }, [count]);
  
    const increment = () => {
      setCount(count + 1);
    };
  
    return { count, increment };
  }


  