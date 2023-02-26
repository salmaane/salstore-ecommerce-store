import '../../styles/deliveryinfos.css';
import CreditScoreOutlinedIcon from '@mui/icons-material/CreditScoreOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import ShutterSpeedIcon from '@mui/icons-material/ShutterSpeed';

function DeliveryInfos() {
  return (
    <div className='delivery-wrapper'>
        <div className="prop-wrapper" >
            <LocalShippingOutlinedIcon className="prop-icon" sx={{fontSize:'4rem'}}/>
            <div className='prop-text'>
                <h4>FREE SHIPPING</h4>
                <p>DHL</p>
                <p>AMANA</p>
                <p>CTM</p>
            </div>
        </div>
        <div className="prop-wrapper" >
            <SupportAgentIcon className="prop-icon" sx={{fontSize:'4rem'}}/>
            <div className='prop-text'>
                <h4>SUPPORT 24/7</h4>
                <p>Unlimited support service</p>
            </div>
        </div>
        <div className="prop-wrapper" >
            <CreditScoreOutlinedIcon className="prop-icon" sx={{fontSize:'4rem'}}/>
            <div className='prop-text'>
                <h4>PAYMENT</h4>
                <p>100% secure</p>
            </div>
        </div>
        <div className="prop-wrapper" >
            <ShutterSpeedIcon className="prop-icon" sx={{fontSize:'4rem'}}/>
            <div className='prop-text'>
                <h4>FAST SHIPPING</h4>
                <p>Worldwide fast shipping</p>
            </div>
        </div>
    </div>
  )
}

export default DeliveryInfos