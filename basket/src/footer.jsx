import React from 'react';
import './css/footer.css';
class Footer extends React.Component
{
    render()
    {
        return (
            <footer>
<div className='social'>
<div>SHOP24 в социальных сетях:</div>
<img src={require("./img/blog/vk.png")} />
<img src={require("./img/blog/facebook.png")} />
<img src={require("./img/blog/odn.png")} />
<img src={require("./img/blog/par.png")} />
<img src={require("./img/blog/pinMe.png")} />
<img src={require("./img/blog/youtube.png")} />
<img src={require("./img/blog/inst.png")} />
</div>
<div className="otherOffers">
<img src={require("./img/24shop.png")} />
<div className="phone">8 (800) 500-75-55* <br/><span>*Бесплатный звонок по всей России</span><br/>8 (495) 733-96-03</div>
<FooterMenu li={["Одежда и аксессуары","Обувь","Украшения","Красота и здоровье","Товары для дома, дачи и отдыха","Товары для кухни"]} p={"Каталог товаров"} />
<FooterMenu li={["Оплата и доставка","Возврат","Помощь","Благотворительный Фонд Константина Хабенского?","Гарантия на дополнительное обслуживание товара","Пользовательское соглашение"]} p={"Заказ"} />
<FooterMenu li={["Смотреть прямой эфир","Расписание передач","Акции","Личный кабинет","Поиск и карта сайта","Карта брендов", "Обратная связь"]} p={"Shop24"} />
<FooterMenu li={["О канале","Сотрудничество","Покупайте с нами!","Контакты"]} p={"Информация"} />

</div>
<div className="copyright">
     <div>
     Copyright © Владелец сайта ООО «Коннект», 2014-2018. Все права защищены. Продавцы товаров указаны в разделе контакты.

При использовании материалов сайта ссылка на www.shop24.com обязательна.

115088, г. Москва, ул. Шарикоподшипниковская д.13 стр.62
<br/>
Телефон +8 800 500-75-55
     </div>
    </div>
            </footer>
        )
    }
}
function FooterMenu(props){
    var mass=props.li.map(function(g){return(<li>{g}</li>)})
    return(
        <div className="footerMenu">
        <ul>
        <p>{props.p}</p>

        {mass}</ul>
        </div>
    )
}
export default Footer;