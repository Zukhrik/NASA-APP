import {http} from "./http";
import {astronomyPicOfTheDay} from "./api.types";

export const fetchAstronomyPictureOfTheDay = (): Promise<astronomyPicOfTheDay> => (
  http({
    url: 'planetary/apod'
  })
).then(response => response.data);

export const fetchAsteroids = () => (
  http({
    url: 'neo/rest/v1/neo/browse'
  })
).then(response => response.data);