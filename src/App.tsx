import episodes from "./episodes.json";
import DisplayEpisodes from "./components/episodesComponents";

console.log(`Imported ${episodes.length} episode(s)`);
console.log(`First episode's name is ${episodes[0].name}`);

function App(): JSX.Element {
  const episodesArray: JSX.Element[] = [];

  for (const oneEpisode of episodes) {
    episodesArray.push(<DisplayEpisodes episode={oneEpisode} />);
  }

  return <div>{episodesArray}</div>;
}

export default App;
