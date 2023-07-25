import episodes from "../episodes.json";

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


export default function DisplayEpisodes(props: EpisodeViewProp){

  return (
  
  <div className="episode">
    <p>{props.episode.name}</p>
    <p>{props.episode.season}</p>
    <p>{props.episode.number}</p>
    <img src={props.episode.image.medium}/>
    <p>{props.episode.summary}</p>
    
    
    
  </div>

  );
}