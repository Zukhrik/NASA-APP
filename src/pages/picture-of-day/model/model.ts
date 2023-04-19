import {createEffect, createEvent, createStore, sample} from "effector";
import {astronomyPicOfTheDay, fetchAstronomyPictureOfTheDay} from "../../../shared/api";

export const pageOpened = createEvent();
export const pageClosed = createEvent();


export const fetchAstronomyPictureOfTheDayFx = createEffect(fetchAstronomyPictureOfTheDay);


export const $astronomyPicOfTheDay = createStore<astronomyPicOfTheDay | null>(null);


sample({
  clock: pageOpened,
  target: fetchAstronomyPictureOfTheDayFx
});


$astronomyPicOfTheDay
  .on(fetchAstronomyPictureOfTheDayFx.doneData, (_, data) => data);