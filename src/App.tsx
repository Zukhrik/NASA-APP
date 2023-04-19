import {createBrowserRouter, RouterProvider} from "react-router-dom";
import React from "react";
import {Home} from "./pages/home/pages";
import {PictureOfDay} from "./pages/picture-of-day/pages";
import Bg from "./assets/background.svg";
import {Navigation} from "./shared/ui";
import {Asteroids} from "./pages/asteroids/page";

const roots = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/pic-of-day',
    element: <PictureOfDay/>
  },
  {
    path: '/asteroids',
    element: <Asteroids/>
  },
  {
    path: '/error-pages',
    element: <>404 page</>
  }
]);

function App() {
  const style = {backgroundImage: `url(${Bg})`, height: '100vh'};

  return (
    <div style={style}>
      <Navigation/>
      <RouterProvider router={roots}/>
    </div>
  );
}

export default App;
