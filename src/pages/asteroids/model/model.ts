import {createEvent, createStore, sample} from "effector";
import {createEffect} from "effector/compat";
import {Asteroids, fetchAsteroids} from "../../../shared/api";

export const pageOpened = createEvent();
export const pageClosed = createEvent();

export const fetchAsteroidsFx = createEffect(fetchAsteroids);

export const $asteroidsList = createStore<Asteroids | null>(null);

sample({
  clock: pageOpened,
  target: fetchAsteroidsFx
});


$asteroidsList
  .on(fetchAsteroidsFx.doneData, (_, data) => data);