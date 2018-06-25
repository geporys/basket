import React from 'react';
import "./css/headerCSS.css";
import logo from "./img/logo.png";
import NewLook from "./img/NewLook.png";
class Header extends React.Component{
    render(){
        return(
            <header>
<div style={{width:"100%", background:"#e4e4e4"}}>
<div className="overhead">
       <div className="number"><a href="tel:+78005007555">8 (800) 500-75-55</a><span> Бесплатный звонок по России</span></div>
       <div className="blog">
           <a><img src={require("./img/LogoStar.png")} /> <div>Звездный блог </div></a>
           <a> <img src={require("./img/YouTube-logo.png")} /> <div>Смотрите нас на YouTube</div> </a>
           <a> <img src={require("./img/live.png")} /><div> Смотрите наш прямой эфир</div></a>
       </div>
       </div>
</div>
<div className="middlhead">
    <div className="LeftTest">
           <div className="logo">
               <img src={logo} />
               <img src={NewLook} /> </div>  
           <div className="search">
               <input type="search" placeholder="Поиск по сайту" />
           </div>
    </div>
    <div className="forClient">
       <img src={require('./img/client.png')} /><div className="client">Екатерина</div>
       <img src={require('./img/package.png')} /><div className="basket">В корзине: <br/><span className="amountBasket"> 4</span> товара</div>
    </div>

</div>
                </header>
        )
    }}
        export default Header;