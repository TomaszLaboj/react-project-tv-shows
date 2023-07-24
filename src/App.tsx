import { greet } from "./utils/greet";
import episodes from "./episodes.json";
import DisplayEpisodes from "./components/episodesComponents"

console.log(`Imported ${episodes.length} episode(s)`);
console.log(`First episode's name is ${episodes[0].name}`);

function App(): JSX.Element {
  return <DisplayEpisodes/>;
}

export default App;
