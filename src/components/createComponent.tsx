import { IEpisode } from "./episodesComponents";
import { DisplayEpisode } from "./episodesComponents";

export function createComponent(array: IEpisode[]): JSX.Element[] {
  const episodesArray: JSX.Element[] = [];

  for (const oneEpisode of array) {
    episodesArray.push(<DisplayEpisode episode={oneEpisode} />);
  }

  return episodesArray;
}
