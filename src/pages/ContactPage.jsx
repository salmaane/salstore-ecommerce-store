import "../styles/contactPage.css";
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

function ContactPage() {
  return (
    <div className='contactPage-container'>
        <h2>CONTACT US</h2>
        <section className="contact-container">
          <div className="infos">
            <div>
              <AlternateEmailOutlinedIcon/>
              <p>salstore@gmail.com</p>
            </div>
            <div>
              <LocalPhoneOutlinedIcon/>
              <p>+1 (555) 123-4567</p>
            </div>
            <div>
              <LocationOnOutlinedIcon/>
              <p>1234 Maple Street, Springfield, USA.</p>
            </div>
          </div>
          <form className="form">
            <div>
              <label htmlFor="name" >Your Name</label>
              <input type="text" id="name"/>
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input type="email" id="email"/>
            </div>
            <div>
              <label htmlFor="object">Object</label>
              <input type="text" id="object"/>
            </div>
            <div>
              <label htmlFor="message" >Your Message</label>
              <textarea id="message"></textarea>
            </div>
            <button className="submit-button">SEND</button>
          </form>
        </section>
    </div>
  )
}

export default ContactPage