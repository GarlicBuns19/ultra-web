import { Link } from "react-router-dom";
import useFetch from "../composables/fetch";
import img from "../images/ultra-vegito.webp";
// import sayains from "../images/2sayains.jpg";

function Home() {
  const { arr, pending, error } = useFetch(
    "https://ultra-d1da.onrender.com/ultra/data"
  );
  const mystyle = {
    width: "100%",
    height: "90vh",
    // padding: "100px 0 0 0"
  };

  return (
    <div className="container">
      <h1>Home</h1>
      {pending && <div>Loading the data</div>}
      {error && <div>{error}</div>}

      <div className="row">
        <div className="col-12 col-md-6">
          <img src={img} alt="" className="img-fluid" style={mystyle} />
        </div>
        <div className=" col-12 col-md-6">
          <div className="row">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
              deserunt alias ut, est rem eos ea odit in beatae commodi nobis
              impedit doloremque modi sapiente tempora animi maxime adipisci
              nemo fugiat, autem unde error necessitatibus. Doloremque facere
              possimus vero aspernatur accusamus rerum, odio tenetur, itaque
              quisquam quod minus maxime architecto. Pariatur deserunt esse
              voluptas, delectus vel consectetur, harum quo eius obcaecati,
              voluptate fugit recusandae accusantium. Unde, voluptatum
              voluptatem error quas soluta aperiam qui fugit maiores
              perspiciatis quis totam earum iste deleniti non nisi fugiat ullam
              esse nihil atque quos ratione in sed ipsam. Et doloremque ipsum
              natus mollitia, facere fugit.
            </p>

            <ul className="listData">
                <li>Genre : Fight</li>
                <li>Genre : Fight</li>
                <li>Genre : Fight</li>
            </ul>
            <div className="ultraScroll row">
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
    </div>
  );
}

export default Home;
