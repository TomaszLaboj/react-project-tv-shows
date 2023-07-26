import {IEpisode} from "./episodesComponents"



export default function filterTVShowsBySearchInput(inputText:string, inputArray:IEpisode[]):IEpisode[]{
  const filteredArrayByName:IEpisode[] = inputArray.filter((episodeName)=>
  episodeName.name.toLowerCase().includes(inputText.toLowerCase())||episodeName.summary.toLowerCase().includes(inputText.toLowerCase()));
//   const filteredArrayBySummary:IEpisode[] = inputArray.filter((episodeName)=>episodeName.summary.toLowerCase().includes(inputText.toLowerCase()));
    return filteredArrayByName;
}