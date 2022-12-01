import { Link } from "react-router-dom";
import useFetch from "../composables/fetch";
import img from "../images/ultra-vegito.webp";
// import sayains from "../images/2sayains.jpg";

function Home() {
  const { arr, pending, error } = useFetch(
    "https://ultra-d1da.onrender.com/ultra/data"
  );
  // const mystyle = {
  //   width: "100%",
  //   height: "90vh",
  // };

  return (
    <div className="container-fluid home">
      <h1>Home</h1>
      {pending && <div>Loading the data</div>}
      {error && <div>{error}</div>}

      <div className="row">
        <div className="col-sm-12 col-md-5">
          {/* <img src={img} alt="" className="img-fluid" style={mystyle} /> */}
          <img src={img} alt="" className="ultra-img img-fluid" />
        </div>
        <div className=" col-sm-12 col-md-7">
          <div className="row">
            <p>
              After the tournament of power Goku and Vegeta conitue traing with
              Beerus and Whis. 
              <br />
              While training Beerus ask to fight but he wants
              to fight Gogeta and that is when it started.
            </p>

            <ul className="listData">
              <li>Genre : Fight</li>
            </ul>

            <div className="ultraScroll row">
              {arr &&
                arr.map((ultra) => (
                  <div className="col-3 col-md-2 py-2" key={ultra.ultra_id}>
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
    </div>
  );
}

export default Home;
