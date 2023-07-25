import formatEpisodeCode from "./formatEpisodeCode"

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


  

export default function DisplayEpisodes(props: EpisodeViewProp) {
  return (
    <div className="episode">
      <p>{props.episode.name}</p>
      <p>{formatEpisodeCode(props.episode.season,props.episode.number)}</p>
      
      <img src={props.episode.image.medium} alt="props.episode.name" />
      <p>{props.episode.summary.substring(3,props.episode.summary.length-4)}</p>
    </div>
  );
}
