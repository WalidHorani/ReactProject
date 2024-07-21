'use client';
import Recipe from '@/app/pages/recipe/page' ;
import Country from '@/app/pages/Country/page' ;
import Details from '@/app/pages/details/page' ;

let route =[
    {
        path: "/",
        element: <Recipe />,
    },
    {
        path: "/:country",
        element: <Country />,
    },
    {
        path: "/details/:elementType/:elementId",
        element: <Details />,
    },
] ;
export default route ;