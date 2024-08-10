import { useState, useEffect } from "react";

export function useGetCatImage({ facts }) {
  const [imagen, setImagen] = useState();

  useEffect(() => {
    if (!facts) return;

    const firstThreeWords = facts.split(" ", 3).join(" ");

    fetch(
      `https://cataas.com/cat/says/${firstThreeWords}?size=50&color=red&json=true`
    )
      .then((res) => res.json())
      .then((response) => {
        const { url } = response;
        setImagen(`https://cataas.com${url}`);
      });
  }, [facts]);

  return { imagen };
}
