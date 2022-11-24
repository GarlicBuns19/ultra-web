import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [arr, setArr] = useState(null);
  const [pending, setPending] = useState(true);
  const [error, setErr] = useState(null);

  useEffect(() => {
    if (url) {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw Error("Data cannot be fetched");
          }
          return res.json();
        })
        .then((data) => {
          setErr(null);
          setPending(false);
          setArr(data.results);
        })
        .catch((err) => {
          setPending(false);
          setErr(err.message);
          console.log(err.message);
        });
    }
  }, [url]);
  console.log(arr);

  return { arr, pending, error };
};

export default useFetch;
