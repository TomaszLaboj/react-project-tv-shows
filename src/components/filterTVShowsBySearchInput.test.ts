import filterTVShowsBySearchInput from "./filterTVShowsBySearchInput";
import episodes from "../episodes.json";

test("should return filtered array length", () => {
  expect(filterTVShowsBySearchInput("Broken",
  episodes)).toHaveLength(3);
});

test("should return filtered array", () => {
    expect(filterTVShowsBySearchInput("Remembers",
    episodes)).toEqual([{"id": 4962,
    "url": "https://www.tvmaze.com/episodes/4962/game-of-thrones-2x01-the-north-remembers",
    "name": "The North Remembers",
    "season": 2,
    "number": 1,
    "type": "regular",
    "airdate": "2012-04-01",
    "airtime": "21:00",
    "airstamp": "2012-04-02T01:00:00+00:00",
    "runtime": 60,
    "rating": {
      "average": 8.1
    },
    "image": {
      "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/1/3174.jpg",
      "original": "https://static.tvmaze.com/uploads/images/original_untouched/1/3174.jpg"
    },
    "summary": "<p>War grips the continent of Westeros. As Tyrion Lannister tries to take his strong-willed nephew in hand in King's Landing, Stannis Baratheon launches his own campaign to take the Iron Throne with the help of a mysterious priestess. In the east, Daenerys must lead her retinue through a desolate wasteland whilst beyond the Wall the Night's Watch seeks the aid of a wildling.</p>",
    "_links": {
      "self": {
        "href": "https://api.tvmaze.com/episodes/4962"
      },
      "show": {
        "href": "https://api.tvmaze.com/shows/82"
      }
    }}]);
  });