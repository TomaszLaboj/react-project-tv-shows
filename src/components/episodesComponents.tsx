import { formatEpisodeCode } from "./formatEpisodeCode";
import { cleanUpSummary } from "./cleanUpSummary";

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
  rating?: { average?: number | null };
  runtime: number;
  image?: null | {
    medium?: string;
    original?: string;
  };
  summary?: string | null;
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
      <div>
        {props.episode.image && (
          <img
            className="episodeImg"
            src={props.episode.image.medium}
            alt="props.episode.name"
          />
        )}
      </div>
      {props.episode.summary && (
        <p className="episodeSummary">
          {cleanUpSummary(props.episode.summary)}
        </p>
      )}
    </div>
  );
}
