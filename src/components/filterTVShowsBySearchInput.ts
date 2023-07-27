import { IEpisode } from "./episodesComponents";

export function filterTVShowsBySearchInput(
  inputText: string,
  inputArray: IEpisode[]
): IEpisode[] {
  const filteredArrayByName: IEpisode[] = inputArray.filter(
    (episodeName) =>
      episodeName.name.toLowerCase().includes(inputText.toLowerCase()) ||
      (episodeName.summary
        ? episodeName.summary.toLowerCase().includes(inputText.toLowerCase())
        : "")
  );
  return filteredArrayByName;
}
