export function formatEpisodeCode(season: number, episode: number): string {
  let seasonCode: string;
  let episodeCode: string;

  if (season < 10) {
    seasonCode = "S0" + season;
  } else {
    seasonCode = "S" + season;
  }
  if (episode < 10) {
    episodeCode = seasonCode + "E0" + episode;
  } else {
    episodeCode = seasonCode + "E" + episode;
  }
  return episodeCode;
}
