import { Link } from 'react-router-dom';
import '../../styles/footer.css';
import DeliveryInfos from './DeliveryInfos.jsx';

function Footer() {
  return (
    <>
      <DeliveryInfos/>
      <div className='footer-wrapper'>
        <div className='about-us'>
          <img src={import.meta.env.BASE_URL+"/assets/logo/logo.png"}  className='logo2' alt="logo"/>
          <p className='description'>Salstore, where you'll find the latest
            and greatest in footwear. We offer a wide selection of top brands,
            with styles to fit any taste. Our easy-to-use website makes 
            shopping a breeze, and our fast, reliable shipping ensures 
            you'll receive your order quickly. With excellent customer 
            service and new arrivals added regularly. Shop with us today and 
            step up your sneaker game!
          </p>
          <div>
            <p>Adress : <i>1234 Maple Street, Springfield, USA.</i></p>
            <p>Phone : +1 (555) 123-4567</p>
            <p>Email : salstore@gmail.com</p>
          </div>
        </div>

        {/* This is just a temporary data it will be modified later */}
        <div className='categories'> 
          <div className='sneakers'>
            <h4>BRANDS</h4>
            <p>Adidas</p>
            <p>Nike</p>
            <p>Air Jordan</p>
            <p>Asics</p>
            <p>Converse</p>
            <p>Puma</p>
            <p>Reebok</p>
            <p>Under Armour</p>
            <p>Vans</p>
          </div>
          <div className='boots'>
            <h4>GENDERS</h4>
            <p>Men</p>
            <p>Women</p>
            <p>Childs</p>
          </div>
          <div className='shoes'>
            <h4>SHOES</h4>
            <p>Adidas</p>
            <p>Nike</p>
            <p>Air Jordan</p>
            <p>Converse</p>
            <p>Puma</p>
            <p>Vans</p>
          </div>
          <div className='sandals'>
            <h4>SANDALS</h4>
            <p>Adidas</p>
            <p>Nike</p>
            <p>Puma</p>
            <p>Reebok</p>
          </div>
        </div>
      </div>
      <div className="sub-footer" >
        <div className='terms-privacy'>
          <Link to="contact" onClick={()=>window.scrollTo(0,0)}>Contact us</Link>
          <Link to="" onClick={()=>window.scrollTo(0,0)}>Privacy Policy</Link>
          <Link to="" onClick={()=>window.scrollTo(0,0)}>Terms of use</Link>
        </div>
        <p>© 2023 All Rights Reserved by Salstore</p>
      </div>
    </>
  )
}

export default Footer