import { useEffect, useState } from "react";
import AddData from "../composables/add";

function AddingData() {
  const { error, pending } = AddData(
    "https://ultra-d1da.onrender.com/ultra/addData"
  );
  const [episode, setEp] = useState("");
  const [episode_name, setEpName] = useState("");
  const [vid_date, setVidData] = useState("");
  const [vid, setVid] = useState("");

  const handleSubmit = () => {};
  return (
    <div>
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <label>Episode</label>
        <input
          type="text"
          value={episode}
          placeholder="Number eg 01 or 15"
          onChange={(e) => setEp(e.target.value)}
        />
        <br />
        <label>Episode Name</label>
        <input
          type="text"
          value={episode_name}
          placeholder="The Name of the ep"
          onChange={(e) => setEpName(e.target.value)}
        />
        <br />
        <label>Video Date</label>
        <input
          type="text"
          value={vid_date}
          onChange={(e) => setVidData(e.target.value)}
        />
        <br />
        <label>Video Youtub Link</label>
        <input
          type="text"
          value={vid}
          placeholder="Youtube link watch?v=(this part)"
          onChange={(e) => setVid(e.target.value)}
        />
      </form>
    </div>
  );
}

export default AddingData;
