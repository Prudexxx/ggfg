
import Product from "../Tematika/product";
import './productu.css'
import Marquee from "../strokaBeg/strokaBeg";

const Productu = () => {
    return(
        <div className="bloki" > 
          <Product/>
        <Marquee name='АКЦИЯ при заказе от 1000 руб 1 кг  пельменей  500 руб   доставка бесплатная, в отдаленные районы по договоренности другой. Количество товара  ограничено!!!'/>

         
        </div>
    )
}

export default Productu; 