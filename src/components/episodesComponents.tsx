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

export default function DisplayEpisodes(props: IEpisode[]): JSX.Element {

  return (
  <>
  <div>
    {props.map((element)=><div>{element}</div>)}
    
    
  </div>
  </>
  );
}
