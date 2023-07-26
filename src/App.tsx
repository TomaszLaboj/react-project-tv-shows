import episodes from "./episodes.json";
import DisplayEpisodes from "./components/episodesComponents";
import "./App.css"
import {useState, useEffect} from "react";
import filterTVShowsBySearchInput from "./components/filterTVShowsBySearchInput";
import {IEpisode} from "./components/episodesComponents"

console.log(`Imported ${episodes.length} episode(s)`);
console.log(`First episode's name is ${episodes[0].name}`);

function App(): JSX.Element {

  let episodesArrayForFiltering:IEpisode[]= episodes

  const episodesArray: JSX.Element[] = [];

  for (const oneEpisode of episodesArrayForFiltering) {
    episodesArray.push(<DisplayEpisodes episode={oneEpisode} />);
  }
  console.log(episodesArray)
const [current, setCurrent] = useState(episodesArray);
const [input, setInput] = useState('')
useEffect(() =>{
 episodesArrayForFiltering = filterTVShowsBySearchInput(input, episodesArrayForFiltering);
 setCurrent([...episodesArray])
}
  ,
[input]
)

  return (
    <>
      <div className="header">TV Shows</div>
        <div className="search">Search bar:
          <input className="searchBar" value={input} 
          onChange={(event) => {
          setInput(event.target.value);  
        }} />
        </div>
      <div className="main">
        {current}
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
