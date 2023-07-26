import { IEpisode } from "./episodesComponents";
import DisplayEpisodes from "./episodesComponents";

export default function createComponent(array: IEpisode[]): JSX.Element[] {
  const episodesArray: JSX.Element[] = [];

  for (const oneEpisode of array) {
    episodesArray.push(<DisplayEpisodes episode={oneEpisode} />);
  }

  return episodesArray;
}
