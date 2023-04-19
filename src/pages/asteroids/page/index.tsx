import {useEffect} from "react";
import {$asteroidsList, pageClosed, pageOpened} from "../model/model";
import {useStore} from "effector-react";

export const Asteroids = () => {
  const asteroids = useStore($asteroidsList)

  useEffect(() => {
    pageOpened();

    return () => pageClosed();
  }, []);

  return (
    <div>
      {asteroids?.near_earth_objects.map((asteroid) => (
        <div
          key={asteroid.id}
          style={{display: 'flex', flexDirection: 'column'}}
        >
          {asteroid.name}
          <img src={asteroid.nasa_jpl_url} alt={asteroid.nasa_jpl_url}/>
        </div>
      ))}
    </div>
  );
};