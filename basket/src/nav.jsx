import React from 'react';
import "./css/nav.css";
import {NavLink, BrowserRouter, Router} from 'react-router-dom';
var ObjectsMenu={
    "Одежда и аксессуары":
    (<div>
    <NavLink to="/">Мужская одежда</NavLink>
    <NavLink to="/">Женская одежда</NavLink>
    <NavLink to="/">Одежда для детей</NavLink>
    <NavLink to="/">Аксессуары</NavLink>
    </div>), 
    "Обувь":
    (<div>
    <NavLink to="/">Мужская обувь</NavLink>
    <NavLink to="/">Женская обувь</NavLink>
    <NavLink to="/">Детская обувь</NavLink>
    <NavLink to="/">Зимняя обувь</NavLink>
    </div>), 
    "Украшения":
    (<div>
    <NavLink to="/">Серьги</NavLink>
    <NavLink to="/">Кулоны</NavLink>
    <NavLink to="/">Браслеты</NavLink>
    <NavLink to="/">Броши</NavLink>
    <NavLink to="/">Кольца</NavLink>
    </div>), 
    "Красота и здоровье":
    (<div>
    <NavLink to="/">Маакияж</NavLink>
    <NavLink to="/">Здоровье и гигиена</NavLink>
    <NavLink to="/">Уход за кожей</NavLink>
    <NavLink to="/">Уход за волосами</NavLink>
    </div>), 
    "Товары для дома":
    (<div>
    <NavLink to="/">Текстиль</NavLink>
    <NavLink to="/">Все для декора</NavLink>
    <NavLink to="/">Хранение вещей</NavLink>
    <NavLink to="/">Бытовая химия</NavLink>
    </div>), 
    "Товары для кухни":
    (<div>
    <NavLink to="/">Кухонная утварь</NavLink>
    <NavLink to="/">Посуда</NavLink>
    <NavLink to="/">Кухонные аксессуары</NavLink>
    </div>)
}
class Menu extends React.Component{
    constructor(props){
        super(props);
    this.state={
     dropDawn: <div></div>,
     illumination:null
    }
    this.ClickOnMenu=this.ClickOnMenu.bind(this);
    }
    render()
    {return(
            <BrowserRouter>
           <nav className="navHeader"> 
               <div className="parentMenu" >
               <div className="menu" onClick={this.ClickOnMenu}>
               <div className="butt" onClick={this.menu}><img src="https://png.icons8.com/ios/50/000000/menu.png"/></div>
               <div className="phoneMenu">
         <NavLink to="/">Одежда и аксессуары</NavLink>
         <NavLink to="/">Обувь</NavLink>
        <NavLink to="/">Украшения</NavLink>
        <NavLink to="/">Красота и здоровье</NavLink>
        <NavLink to="/">Товары для дома</NavLink>
        <NavLink to="/">Товары для кухни</NavLink>
        </div>
        </div>
        </div>
      <div className="dropDawn">{this.state.dropDawn}</div> 
       </nav>
 
    </BrowserRouter>
    )}
    componentDidMount()
    {
        var main=document.getElementsByClassName("menu")[0];
        var main=document.getElementsByClassName("navHeader")[0];
        window.onscroll = function() {
          if(window.pageYOffset>124 && document.documentElement.clientWidth<920){
              main.style.position="fixed";
              main.style.top="0px";
       }
       else{
        main.style.position="relative";
       }
        }
    }
    menu(e){
        var menu=document.getElementsByClassName('menu')[0];
        var menuP=document.getElementsByClassName('phoneMenu')[0];
        var styleMenu=getComputedStyle(menuP);
        
        if(styleMenu.display=="flex"){
            document.getElementsByClassName("dropDawn")[0].style.display="none";
   menuP.style.display="none";
   menu.style.width="50px";
   document.getElementsByClassName("parentMenu")[0].style.width="100%";
   return;
        }
        document.getElementsByClassName("parentMenu")[0].style.width="170px";
        menuP.style.display="flex";
        menu.style.width="170px";
    }
    ClickOnMenu(e){
        var target=e.target;
         if(target.tagName!="A")
        {return}
        if(this.state.illumination && document.documentElement.clientWidth>920)
        {
           this.state.illumination.style.borderBottom="none";
        }
        this.state.illumination=target;
        if(document.documentElement.clientWidth>920){
        target.style.borderBottom="3px solid #ff6c00";}
       
        this.setState(function() {return{dropDawn: ObjectsMenu[target.innerText]}})
        document.getElementsByClassName("dropDawn")[0].style.display="flex";
        if(document.documentElement.clientWidth<920){
        //    document.getElementsByClassName("dropDawn")[0].style.position="fixed";
        }
        if(document.documentElement.clientWidth>920){
        document.getElementsByTagName('nav')[0].style.borderBottom="1px solid #e4e4e4";
        }
    }

}
export default Menu;   