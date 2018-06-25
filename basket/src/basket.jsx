import React from 'react';
import './css/basket.css';
import Offers from './offers.jsx';
var massProduct=[{name: "Платье-миди с расклешенной юбкой", img:require("./img/product/skirt.png"), price:"2450",code:"82039-11",size:"44", color:"синий"},
{name: "Туфли жениские украшенные кружевными вставками", img:require("./img/product/shoes.png"), price:"2450",code:"13524-01",size:"38", color:"черный"},
{name: "Платье-миди", img:require("./img/product/dress.png"), price:"2450",code:"75039",size:"44", color:"белый"}]

class Basket extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            amount:0,
            total:0,
            discount: 0,
            code: 123456,
            prices:[],
            products: creatProducts(massProduct, this)
        }
        this.change=this.change.bind(this);
        this.delet=this.delet.bind(this);
        this.discount=this.discount.bind(this);
    }
    render(){
        return(
            <menu>
                <h1 className="nameBasket">Ваша корзина</h1>
                <div className="basketTable">
                      <table>
                          <tbody>
                          <tr className="totalTable">
                              <td>Товар</td>
                              <td>Описание</td>
                              <td className="change">Количество</td>
                              <td style={{textAlign: "center"}}>Цена</td>
                              <td></td>
                          </tr>
                          {this.state.products}
                          </tbody>
                    </table>
                      </div>
                    <hr align={"center"} size={"2"} color={"#d9d9d9"} />
                      <div className="bottomBasket">
                         <div><input placeholder="Введите промокод" type="search"  /> <button onClick={this.discount}>Применить</button>  </div>
                         <div className="cashbox">
                          <div> <div>Сумма заказа:</div><div className="total">{this.state.amount}</div></div>
                           <div style={{color: "#ff6c00"}}><div>Промокод:</div><div>-{this.state.discount}</div></div>
                           <div style={{marginTop:"50px"}}><div>Всего:</div><div className="total">{this.state.total}</div></div>
                           <button>Оформить заказ</button>
                         </div>
                      </div>
                      <h1 className="nameBasket">Добавьте к вашему заказу</h1>
                      <Offers />
            </menu>
        )
        
    }
    componentDidMount(){
        document.getElementsByClassName("amountBasket")[0].innerText=this.state.products.length;   
       this.setState({amount: this.state.prices.reduce(function(sum, current) {
        return sum + +current
      }, 0),total: this.state.prices.reduce(function(sum, current) {
        return sum + +current
      }, 0)})
    }
    discount(e){
        var input=e.target.parentNode.children[0];
        if(input.value=="123456"){
   this.setState({discount: 1800, total: this.state.amount-1800});
   input.style.border="1px solid #dadada";
}
   else{
       input.style.border="1px solid red";
   }
    }
change(e)
         {
             var target=e.target;
            
              switch(target.innerText){
                  case '-':
                  target=target.nextSibling;
                 target.innerText=+target.innerText-1;
                this.setState(function(){return {amount: +this.state.amount-this.state.prices[target.getAttribute('data-id')], total: +this.state.total-this.state.prices[target.getAttribute('data-id')]}})
                 if(target.innerText==0){this.delet(e)}
        
                  break;
                  case '+':
                  target=target.previousSibling;
                  target.innerText=+target.innerText+1;
                  this.setState(function(){return {amount: this.state.amount+ +this.state.prices[target.getAttribute('data-id')], total: this.state.total+ +this.state.prices[target.getAttribute('data-id')]}})
                  break;
              }
        }
        delet(e)
        {
            var target=e.target;
            while(target.tagName!="TR"){target=target.parentNode}
          this.setState(function(){return {amount: +this.state.amount-this.state.prices[target.getElementsByClassName('voting')[0].getAttribute('data-id')], total:+this.state.amount-this.state.prices[target.getElementsByClassName('voting')[0].getAttribute('data-id')]}})
          target.remove();
          document.getElementsByClassName("amountBasket")[0].innerText--;  
        }

}
function Product(props){
    props.target.state.prices[props.id]=props.price;
    return (<tr  >
                              <td><div className="deleteOnPhone" onClick={props.target.delet}>X</div><img src={props.img} /></td>
                              <td className="description">
                                  <div>{props.name}</div>
                                  <div style={{fontWeight:"400", fontSize:"12px", color:"#919191"}}>Код: {props.code}</div>
                                  <div>Размер: {props.size}<br/>Цвет: {props.color}</div>
                              </td>
                              <td className="change" onClick={props.target.change}><span>-</span><div data-id={props.id} className="voting">1</div><span>+</span></td>
                              <td className="PPrice">{props.price} руб</td>
                              <td className="delete"><span onClick={props.target.delet}>X</span></td>
    </tr>)
}
function creatProducts(p, target)
{
    var mass=[];
for(var i=0;i<p.length;i++)
{
   mass[i]=<Product id={i} target={target} img={massProduct[i].img} name={massProduct[i].name} price={massProduct[i].price} code={massProduct[i].code} size={massProduct[i].size} color={massProduct[i].color} />
}
return mass;
}
export default Basket;