import "./App.css";

import { useState, useEffect } from "react";
// import episodes from "./episodes.json";
import episodesSimpsons from "./episodesSimpsons.json";
import { filterTVShowsBySearchInput } from "./components/filterTVShowsBySearchInput";
import { DisplayEpisode, IEpisode } from "./components/episodesComponents";
import { createComponent } from "./components/createComponent";

// async function fetchTVEpisodes() {
//   const response = await fetch (
//     "https://api.tvmaze.com/shows/82/episodes"
//   );
//   const jsonBody = await response.json();
//   console.log(jsonBody);

// }

function App(): JSX.Element {
  const [episodesArray, setEpisodesArray] = useState<IEpisode[]>([]);
  const [input, setInput] = useState("");
  useEffect(() => {
    function fetchTVEpisodes() {
      fetch("https://api.tvmaze.com/shows/83/episodes")
        .then((res) => res.json())
        .then((res) => setEpisodesArray(res));
    }
    fetchTVEpisodes();
  }, []);
  return (
    <>
      <div className="header">
        <h1>TV Shows</h1>
      </div>
      <div className="search">
        <p className="searchText">Search:</p>
        <input
          className="searchBar"
          value={input}
          placeholder="your search term..."
          onChange={(event) => {
            setInput(event.target.value);
          }}
        />
        <div className="numberOfEpisodes">
          <p>Displaying:{episodesArray.length} episodes</p>
        </div>
      </div>
      <div className="main">
        {episodesArray.map((e) => (
          <DisplayEpisode episode={e} key={e.id} />
        ))}
      </div>

      <footer className="footer">
        <p>
          Data has been obtained from{" "}
          <a
            href="https://tvmaze.com/api#licensing"
            target="_blank"
            rel="noreferrer"
          >
            TVMaze.com
          </a>
        </p>
      </footer>
    </>
  );
}

export default App;
