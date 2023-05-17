import { useEffect, useState } from "react";
import { getRandomFact } from "../services/facts";

export function useCatFact() {
  const [facts, setFacts] = useState(undefined);

  const refreshFact = () => {
    getRandomFact().then((fact) => setFacts(fact));
  };
  useEffect(refreshFact, []);

  return { refreshFact, facts };
}
