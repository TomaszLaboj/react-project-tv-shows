import episodes from "./episodes.json";

import "./App.css";
import { useState, useEffect } from "react";
import filterTVShowsBySearchInput from "./components/filterTVShowsBySearchInput";
import { IEpisode } from "./components/episodesComponents";
import createComponent from "./components/createComponent";

console.log(`Imported ${episodes.length} episode(s)`);
console.log(`First episode's name is ${episodes[0].name}`);

function App(): JSX.Element {
  const displayArray: IEpisode[] = episodes;

  const [current, setCurrent] = useState(createComponent(displayArray));
  const [input, setInput] = useState("");
  const [number, setNumber] = useState(displayArray.length);
  useEffect(() => {
    const displayArray_2 = filterTVShowsBySearchInput(input, displayArray);
    setCurrent(createComponent(displayArray_2));
    setNumber(displayArray_2.length);
  }, [input,displayArray]);

  return (
    <>
      <div className="header">TV Shows</div>
      <div className="search">
        Search bar:
        <input
          className="searchBar"
          value={input}
          onChange={(event) => {
            setInput(event.target.value);
          }}
        />
        <div className="numberOfEpisodes">Displaying:{number} episodes</div>
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
