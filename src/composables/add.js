import { useEffect, useState } from "react";

const useAdd = (url, episode, episode_name, vid_date, vid) => {
  const [error, setErr] = useState(null);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        episode: episode,
        episode_name: episode_name,
        vid_date: vid_date,
        vid: vid,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => {
        setPending(false)
        if (!res.ok) {
          throw new Error("Could not add data");
        }
        return res.json();
      })
      .then((addedData) => console.log(addedData))
      .catch((err) => {
        setPending(false)
        setErr(err.message)
    });
  }, [url, episode, episode_name, vid_date, vid]);

  return { error , pending};
};

export default useAdd;
