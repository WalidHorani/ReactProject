//Templet
import {Row,Col,Bg,Elm} from '@/app/Components/General/Grid' ;
import style from './recipe.module.css';

//hooks
import { useContext } from 'react';

//other file needed for hooks
import { TranslationContext } from '@/app/Context/TranslationContext';

//packgis
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { Link } from "react-router-dom";

/*
|-----------------------------------------------------------------------
|   instantiate External Service
|-----------------------------------------------------------------------
*/

export default function NavBar() {
// console.log('Rerender NavBar');
  /*
|-----------------------------------------------------------------------
|   init value for state
|-----------------------------------------------------------------------
*/
  //

/*
|-----------------------------------------------------------------------
|   defining state
|-----------------------------------------------------------------------
*/
  //

/*
|-----------------------------------------------------------------------
|   define effect
|-----------------------------------------------------------------------
*/
  //

/*
|-----------------------------------------------------------------------
|   effect function
|-----------------------------------------------------------------------
*/
  //

/*
|-----------------------------------------------------------------------
|   use Context
|-----------------------------------------------------------------------
*/
  //use context
  let translateContextARR = useContext(TranslationContext) ;

  //define variable dependin in context
  let translateFunction = translateContextARR[0] ;

/*
|-----------------------------------------------------------------------
|   context Function
|-----------------------------------------------------------------------
*/
  //

/*
|-----------------------------------------------------------------------
|   Return JSX
|-----------------------------------------------------------------------
*/
  return (
    <>
      <Row p={{jc:'c'}} >
        <Col p={{c:'10'}} >
          <Elm >
            <Link to={`/`}>
              <div className={'d-flex flex-column justify-content-center align-items-center '+ style.navBarButton} >
                  <FaPizzaSlice />
                  <span className={style.navBarSpan}>Home</span>
              </div>
            </Link>
            <Link to={`/Italian`}>
              <div className={'d-flex flex-column justify-content-center align-items-center '+ style.navBarButton}>
                  <FaPizzaSlice />
                  <span className={style.navBarSpan}>Italian</span>
              </div>
            </Link>
            <Link to={`/American`}>
              <div className={'d-flex flex-column justify-content-center align-items-center '+ style.navBarButton}>
                  <FaHamburger />
                  <span className={style.navBarSpan}>American</span>
              </div>
            </Link>
            <Link to={`/Japanese`}>
              <div className={'d-flex flex-column justify-content-center align-items-center '+ style.navBarButton}>
                  <GiChopsticks />
                  <span className={style.navBarSpan}>Japanese</span>
              </div>
            </Link>
          </Elm>
        </Col>
      </Row>
    </>
  );
}
