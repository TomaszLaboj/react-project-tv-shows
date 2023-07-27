import { formatEpisodeCode } from "./formatEpisodeCode";

export interface IEpisode {
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

export function DisplayEpisodes(props: EpisodeViewProp) {
  return (
    <div className="episode">
      <p className="episodeName">{props.episode.name}</p>
      <p className="episodeCode">
        {formatEpisodeCode(props.episode.season, props.episode.number)}
      </p>
      <hr className="dividerLine"></hr>
      <img
        className="episodeImg"
        src={props.episode.image.medium}
        alt="props.episode.name"
      />
      <p className="episodeSummary">
        {props.episode.summary.replaceAll(/<\/?[^>]+(>|$)/gi, "")}
      </p>
    </div>
  );
}
