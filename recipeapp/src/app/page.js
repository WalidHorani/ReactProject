'use client';
import { StrictMode } from 'react';
import {createBrowserRouter, RouterProvider, Link} from "react-router-dom";
import { useEffect,useState } from 'react';
import route from '@/app/Route/route'; 

export default function Home() {
  let [ isAppReadyState, setIsAppReadyState ] = useState(false);
  let [ routerState, setRouterState ] = useState();
  function effectFuntion(){
    setIsAppReadyState(true) ;
    let router = createBrowserRouter(route);
    setRouterState(router);
  }
  useEffect(effectFuntion, []);
  return (
    <StrictMode>
      { isAppReadyState && <RouterProvider router={routerState} />}
    </StrictMode>
  );
}
