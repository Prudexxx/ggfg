import './header.css';

import phone from './Без имени-1.jpg'
import cheburek from './cheburek.jpg';
import dostavka from './Без имени-2.jpg'

const Header = () => {
     
return(
  
              <div className="header">

                  <button className='buttonHeader'><img src={phone} alt="" /></button>
               
                  <div className="logo" >
                        
                        <br />
                        <img className='cheburek' src={cheburek}/>
                        <br />
                        
                  </div>


                  <div className="sylkiButtton">
                        <button className='buttonHeader1'><img className='dostavka' src={dostavka} alt="" /></button>
                  </div>
               
              </div>
        
)
}

export default Header;