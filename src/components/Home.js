import useFetch from '../composables/fetch'

function Home() {
    const {arr,pending,error} = useFetch("https://ultra-d1da.onrender.com/ultra/data")

    return (
        <div>
            <h1>Home</h1>
            {pending && <div>Loading the data</div>}
            {error && <div>{error}</div>}
            {arr && arr.map((ultra) => (
                <div key={ultra.ultra_id}>
                    <h1>{ultra.episode_name}</h1>
                    <h2>Ep {ultra.episode}</h2>
                    <iframe src={"https://www.youtube.com/embed/" + ultra.vid} title={ultra.episode_name} width="1000" height="500"></iframe>
                    <h3>{ultra.vid_date}</h3>
                </div>
            ))}
        </div>
    )
}

export default Home;