import { useState } from "react";
import "../AddForm.css";

function AddingData() {
  const [episode, setEp] = useState("");
  const [episode_name, setEpName] = useState("");
  const [vid_date, setVidData] = useState("");
  const [vid, setVid] = useState("");
  const [error, setErr] = useState(null);
  const [pending, setPending] = useState(false);
  const [finishAdding, setFin] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    let dataAdding = {
      episode,
      episode_name,
      vid_date,
      vid,
    };
    setPending(true);
    fetch("https://ultra-d1da.onrender.com/ultra/addData", {
      method: "POST",
      body: JSON.stringify(dataAdding),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => {
        setPending(false);
        if (!res.ok) {
          throw new Error("Could not add data");
        }
        return res.json();
      })
      .then((addedData) => {
        console.log(addedData);
        setFin("Your data was added");
        setEp("");
        setEpName("");
        setVidData("");
        setVid("");
      })
      .catch((err) => {
        setPending(false);
        setErr(err.message);
      });
  };
  //   console.log(data)

  return (
    <div className="formWidth">
      <h1>Form</h1>
      {error && (
        <div>
          <h1>{error}</h1>
        </div>
      )}
      {finishAdding && (
        <div>
          <h1>{finishAdding}</h1>
        </div>
      )}
      <div className="container my-5">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="row">
                <div className="col-6 textLeft">
                  <label>Episode</label>
                </div>
                <div className="col-6">
                  <input
                    type="text"
                    value={episode}
                    placeholder="Number eg 01 or 15"
                    onChange={(e) => setEp(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="row">
                <div className="col-6 textLeft">
                  <label>Episode Name</label>
                </div>
                <div className="col-6">
                  <input
                    type="text"
                    value={episode_name}
                    placeholder="The Name of the ep"
                    onChange={(e) => setEpName(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="row">
                <div className="col-6 textLeft">
                  <label>Video Date</label>
                </div>
                <div className="col-6">
                  <input
                    type="text"
                    value={vid_date}
                    placeholder="In read more of video"
                    onChange={(e) => setVidData(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="row">
                <div className="col-6 textLeft">
                  <label>Video Youtub Link</label>
                </div>
                <div className="col-6">
                  <input
                    type="text"
                    value={vid}
                    placeholder="Link watch?v=(this part)"
                    onChange={(e) => setVid(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
          {pending && (
            <button disabled className="mt-4">
              Adding
            </button>
          )}
          {!pending && (
            <button type="submit" value="Submit" className="mt-4">
              Submit
            </button>
          )}
        </form>
      </div>
    </div>
  );
}

export default AddingData;
