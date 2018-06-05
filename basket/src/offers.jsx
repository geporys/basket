import React from 'react';
import {NavLink, BrowserRouter, Router} from 'react-router-dom';

function Offers()
{
    return(
      
        <BrowserRouter>
          <nav className="offers">
       <Proposed img={require('./img/s.png')} name={"Сумка"} price={'2450 руб'}  />
       <Proposed img={require('./img/n.png')} name={"Розовые носки"} price={'2450 руб'}  />
       <Proposed img={require('./img/h.png')} name={"Шляпа"} price={'800 руб'}  />
       <Proposed img={require('./img/p.png')} name={"Платье-миди с раскрашеной юбкой"} price={'2450 руб'}  />
       </nav>
       </BrowserRouter>
        
    )
}
export default Offers;
function Proposed(props)
{
   return( <NavLink to="/">
        <img src={props.img} />
        <div>{props.name}</div>
        <div style={{marginTop:"7px"}}> {props.price}</div>
   </NavLink>    )
}