import React from "react";
import css from "./footer.module.css";
import { FaInstagram,FaLinkedin,FaTwitter,FaMailBulk } from "react-icons/fa";
const Footer = () => {
  return (
    <div className={css.sectionThirteen}>
      <div className={css.footerContainer}>
        <div className={css.mainText}>
          <h2>BookMyCollab</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut
          </p>
          <ul>
            <a href="#"><li style={{listStyleType:'none'}}><FaInstagram style={{color : 'rgb(117, 7, 228)'}}/></li></a>
           <a href="#"><li style={{listStyleType:'none'}}><FaLinkedin style={{color : 'rgb(117, 7, 228)'}} /></li></a>
           <a href="#"><li style={{listStyleType:'none'}}><FaTwitter style={{color : 'rgb(117, 7, 228)'}} /></li></a>
           <a href="#"><li style={{listStyleType:'none'}}><FaMailBulk style={{color : 'rgb(117, 7, 228)'}} /></li></a>
          </ul>
        </div>
        <div className={css.companyLinks}>
            <h2>Company</h2>
            <ul>
               <a href=""> <li  style={{listStyleType:'none'}}>About</li></a>
               <a href=""> <li  style={{listStyleType:'none'}}>Career</li></a>
               <a href=""> <li  style={{listStyleType:'none'}}>Terms & Conditions</li></a>
               <a href=""> <li  style={{listStyleType:'none'}}>Privacy Policy</li></a>
               <a href=""> <li  style={{listStyleType:'none'}}>Refund Policy</li></a>
            </ul>
        </div>
        <div className={css.joinLinks}>
            <h2>Join Us</h2>
            <ul>
               <a href=""><li  style={{listStyleType:'none'}}>Join as a brand</li></a>
               <a href=""><li  style={{listStyleType:'none'}}>Join as a creator</li></a>
               <a href=""><li  style={{listStyleType:'none'}}>Find creator</li></a>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
