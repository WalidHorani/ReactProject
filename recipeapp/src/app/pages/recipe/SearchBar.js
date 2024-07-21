//page component
import {Row,Col,Bg,Elm} from '@/app/Components/General/Grid' ;
import { IoIosSearch } from "react-icons/io";

//service

//hooks
import { useContext,useState } from 'react';

//Style
import style from './recipe.module.css';

//other file needed for hooks
import { TranslationContext } from '@/app/Context/TranslationContext';
import { Link } from "react-router-dom";


/*
|-----------------------------------------------------------------------
|   instantiate External Service
|-----------------------------------------------------------------------
*/


export default function SearchBar() {
  // console.log('Rerender SearchBar');
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
  let [ searchTextState, setSearchTextState ] = useState();

/*
|-----------------------------------------------------------------------
|   defining state
|-----------------------------------------------------------------------
*/
  function handleChangeSearchBar(e){
    let newTextSTR = e.target.value ;
    setSearchTextState(newTextSTR) ;
  }

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
    <Row p={{jc:'c'}} s={{mt:'2vh'}}>
      <Col p={{c:'10 col-md-7'}}>
        <Elm>
          <input 
            className={style.searchBar} 
            type='text'
            value={searchTextState} 
            placeholder='muffin' 
            onChange = {handleChangeSearchBar}
          />
        </Elm>
      </Col>
      <Col p={{c:'6 col-md-1'}}>
        <Elm>
          <Link to={`/${searchTextState}`} style={{width:'100%'}}>
            <button className={style.searchButton}>
              <IoIosSearch />
            </button>
          </Link>
        </Elm>
      </Col>
    </Row>
  );
}
