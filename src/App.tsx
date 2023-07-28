import "./App.css";
import { useState, useEffect } from "react";
import { filterTVShowsBySearchInput } from "./components/filterTVShowsBySearchInput";
import { DisplayEpisode, IEpisode } from "./components/episodesComponents";

function App(): JSX.Element {
  const [FilteredEpisodesArray, setFilteredEpisodesArray] = useState<
    IEpisode[]
  >([]);
  const [input, setInput] = useState<string>("");
  const [fullEpisodesArray, setFullEpisodesArray] = useState<IEpisode[]>([]);

  useEffect(() => {
    function fetchTVEpisodes() {
      fetch("https://api.tvmaze.com/shows/83/episodes")
        .then((res) => res.json())
        .then((res) => setFullEpisodesArray(res));
    }
    fetchTVEpisodes();
  }, []);

  useEffect(() => {
    const filteredArray: IEpisode[] = filterTVShowsBySearchInput(
      input,
      fullEpisodesArray
    );
    setFilteredEpisodesArray(filteredArray);
  }, [input, fullEpisodesArray]);
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
          <p>Displaying {FilteredEpisodesArray.length} episodes</p>
        </div>
      </div>
      <div className="main">
        {input.length === 0
          ? fullEpisodesArray.map((e) => (
              <DisplayEpisode episode={e} key={e.id} />
            ))
          : FilteredEpisodesArray.map((e) => (
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
