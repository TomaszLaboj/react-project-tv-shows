interface IEpisode {
  id: number;
  url: string;
  name: string;
  season: number;
  number: number;
  type: string;
  airdate: string;
  airtime: string;
  airstamp: string;
  rating: { average: number };
  runtime: number;
  image: {
    medium: string;
    original: string;
  };
  summary: string;
  _links: { self: { href: string } };
}

interface EpisodeViewProp {
  episode: IEpisode;
}

function formatEpisodeCode(season:number,episode:number):string{
  let seasonCode: string ;
  let episodeCode: string;
  
  if(season<10){
    seasonCode = "S0"+season
  }else{
    seasonCode = "S"+season
  }
  if(episode<10){
    episodeCode = seasonCode+"E0"+episode
  }else{
    episodeCode = seasonCode+"E"+episode
  }
    return episodeCode;
  }
  

export default function DisplayEpisodes(props: EpisodeViewProp) {
  return (
    <div className="episode">
      <p>{props.episode.name}</p>
      <p>{formatEpisodeCode(props.episode.season,props.episode.number)}</p>
      
      <img src={props.episode.image.medium} alt="props.episode.name" />
      <p>{props.episode.summary}</p>
    </div>
  );
}
