// import { useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../composables/fetch";

function SingleUltra() {
  const { id } = useParams();
  const {
    arr: ultra,
    pending,
    error,
  } = useFetch(`https://ultra-d1da.onrender.com/ultra/data/${id}`);
  const mystyle = {
    width : "80%",
    height : "83vh",
  };
  
  return (
    <div className="bgSayain">
      {/* Ultra id = {id} */}
      {pending && <div>Getting data...</div>}
      {error && <div>{error}</div>}
      {ultra && (
        <div>
          <span>
            <h1>{ultra.episode_name}</h1>
            <h2>Ep {ultra[0].episode}</h2>
          </span>
          <div>
            <iframe
              src={`https://www.youtube.com/embed/` + ultra[0].vid}
              title={ultra[0].episode_name}
              style={mystyle}
            ></iframe>
          </div>
          <h3>{ultra[0].vid_date}</h3>
        </div>
      )}
    </div>
  );
}

export default SingleUltra;
