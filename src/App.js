import Header from './component/header/header';
import TelegramForm from './component/forma/forma';
import Productu from './component/img/productVse';
import './App.css';
import Video from './component/video/video';
import KamodVoprosov from './component/kamodVoprosov/kamod';
import KartaOtd from './component/kamodVoprosov/Снимок.JPG';
import Marquee from './component/strokaBeg/strokaBeg';
import ProductList from './component/tovar/tovar';
 import PhoneIcon from './component/ikonkaTelefona/telefon';
function App() {
  const drawerData = [
    { title: 'Условия АКЦИИ', content: `${'При заказе свыше 1000р  цена за кг становится 500 р (пример: при покупке кг пельменей и чебуреков всего 1000 р'}` },
    { title: 'Доставка', content: <img className='karta' src={KartaOtd}/> , df:'Доставка осуществляется внутри красной выделенной линии,с 9:00 до 20:00. При заказе выше 1000 р доставка бесплатная.' },
    { title: 'Процесс от заявки до получения', content: 'Вы оставляете заявку на доставку или самовывоз, с вами связываются в течении 15 минут и договариваемся о встрече, в назначенное время будет встреча.  При огромном заказе нужен предзаказ.' },
    { title: 'Состав', content: 'Фарш: (говядина(50%), свинина(50%), лук, черный перец. Тесто: мука, вода, яйцо, соль.)' },

    { title: 'О нас', content: `${'Самозанятый'}` }
    
    
 
];
  return (
    <div className="app">
       <Video/>
       <Marquee name='Пельмени, чебуреки и фарш  приготовленные в ручную из натурального мяса и вкуснейшего теста по действующей АКЦИИ  при заказе больше 1000 рублей цены становятся: 1 кг пельменей - 500  рублей, 1 кг чебуреков - 500  рублей, 1 кг фарша - 500  рублей, при заказе от 1000  рублей - действует  бесплатная доставка(есть ограничения по районам)!!!'/>
        <Header/>
        
     
        <div className="poduct">
            <Productu/> 
        </div>
        
        <ProductList/>
      
        <p>Вопросы - ответы:</p>
        <KamodVoprosov drawers = {drawerData}/>
        <PhoneIcon/>
        <TelegramForm/>
       
    </div>
  );
}

export default App;
