import {Link} from "react-router-dom";
import "../styles/accountPage.css";

function ForgotPass() {
  return (
    <div className="accountPage-container">
        <section className="login">
            <div className="title">
                <p>FORGOT PASSWORD?</p>
                <p className="subtitle">
                    Please enter your email address below.
                    You will receive a link to reset your password.
                </p>
            </div>
            <form>
              <label htmlFor="email">Email Adress</label>
              <input type="email" id="email"/>
              <button className="submit-button">SUBMIT</button>
              <Link to="/account" style={{width:'100%'}}>
                <button 
                  className="switch-button"
                  onClick={()=>window.scrollTo(0,0)}
                >RETURN TO LOGIN</button>
              </Link>
            </form>
        </section>
    </div>
  )
}

export default ForgotPass