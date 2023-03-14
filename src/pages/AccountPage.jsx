import { useState } from "react";
import "../styles/accountPage.css";
import {Link} from "react-router-dom";

function AccountPage() {

  const [isLogin,setIsLogin] = useState(true);

  return (
    <div className="accountPage-container">
      {isLogin ? 
      <section className="login">
        <p className="title">LOGIN</p>
        <form>
          <label htmlFor="email">Email Adress</label>
          <input type="email" id="email"/>
          <label htmlFor="password" >Password</label>
          <input type="password" id="password"/>
          <Link to="/account/resetpassword">Forgot Password?</Link>
          <button className="submit-button">LOGIN</button>
        </form>
        <p className="new-p">NEW TO SALSTORE?</p>
        <button 
          className="switch-button"
          onClick={()=>setIsLogin(!isLogin)}
        >REGISTER</button>
      </section>
      :
      <section className="register">
        <p className="title">REGISTER</p>
        <form>
          <label htmlFor="name">Full Name</label>
          <input type="text" id="name"/>
          <label htmlFor="email">Email Adress</label>
          <input type="email" id="email"/>
          <label htmlFor="password" >Password</label>
          <input type="password" id="password"/>
          <label htmlFor="confirmpassword" >Confirm Password</label>
          <input type="password" id="confirmpassword"/>
          <label>
            <input type="checkbox" value="sign up for newsletter"/>
            Sign up for Salstore newsletter for news and special promotions
          </label>
          <button className="submit-button">REGISTER</button>
        </form>
        <p className="new-p">ALREADY HAVE AN ACCOUNT?</p>
        <button 
          className="switch-button"
          onClick={()=>setIsLogin(!isLogin)}
        >LOGIN</button>
      </section>
      }
    </div>
  )
}

export default AccountPage