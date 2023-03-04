import {Link} from 'react-router-dom';
import "../../styles/miniBanner.css";

const MiniBanner = ({imgSRC, title, subTitle, buttonText}) => {
  return (
    <div className='mini-banner'>
      <img src={imgSRC} alt="" />
      <div className='text-container'>
        <h1>{title}</h1>
        <h3>{subTitle}</h3>
        <Link 
          to="products"
          onClick={()=>{
            window.scrollTo(0,0);
          }}
        >{buttonText}</Link>
      </div>
  </div>
  )
}

export default MiniBanner