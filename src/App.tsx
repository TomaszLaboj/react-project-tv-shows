import "./App.css";
import { useState, useEffect } from "react";
// import episodes from "./episodes.json";
import episodesSimpsons from "./episodesSimpsons.json";
import { filterTVShowsBySearchInput } from "./components/filterTVShowsBySearchInput";
import { IEpisode } from "./components/episodesComponents";
import { createComponent } from "./components/createComponent";

function App(): JSX.Element {
  const displayArray: IEpisode[] = episodesSimpsons;

  const [current, setCurrent] = useState(createComponent(displayArray));
  const [input, setInput] = useState("");
  const [number, setNumber] = useState(displayArray.length);
  useEffect(() => {
    const UpdatedDisplayArray = filterTVShowsBySearchInput(input, displayArray);
    setCurrent(createComponent(UpdatedDisplayArray));
    setNumber(UpdatedDisplayArray.length);
  }, [input, displayArray]);

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
          <p>Displaying:{number} episodes</p>
        </div>
      </div>
      <div className="main">{current}</div>

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
