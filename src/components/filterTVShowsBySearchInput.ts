import {IEpisode} from "./episodesComponents"



export default function filterTVShowsBySearchInput(inputText:string, inputArray:IEpisode[]):IEpisode[]{
  const filteredArray:IEpisode[] = inputArray.filter((episodeName)=>episodeName.name.includes(inputText));
  
    return filteredArray;
}