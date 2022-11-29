import { Link } from "react-router-dom";
import useFetch from "../composables/fetch";
import img from "../images/ultra-vegito.webp";

function Home() {
  const { arr, pending, error } = useFetch(
    "https://ultra-d1da.onrender.com/ultra/data"
  );

  return (
    <div className="container">
      <h1>Home</h1>
      {pending && <div>Loading the data</div>}
      {error && <div>{error}</div>}
      <div className="row">
        <div className="col-12 col-md-6">
          <img src={img} alt="" width="100%" height={500} className="img-fluid" />
        </div>
        <div className=" col-12 col-md-6">
          <div className="row">
            {arr &&
              arr.map((ultra) => (
                <div className="col-3 col-md-1 p-4" key={ultra.ultra_id}>
                  <Link to={`/ultra/data/${ultra.ultra_id}`}>
                    <h2>Ep {ultra.episode}</h2>
                  </Link>
                  {/* <h1>{ultra.episode_name}</h1>
                    <iframe src={"https://www.youtube.com/embed/" + ultra.vid} title={ultra.episode_name} width="1000" height="500"></iframe>
                    <h3>{ultra.vid_date}</h3> */}
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
