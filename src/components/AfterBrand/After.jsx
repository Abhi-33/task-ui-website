import React from 'react'
import css from './after.module.css';
import { FaInstagram, FaFacebook, FaSnapchatGhost, FaTiktok, FaYoutube } from 'react-icons/fa';
import image from './image.jpg';
const After = () => {
    const iconStyle = {
        color: '#8A2BE2', // Purple color
        fontSize: '15px', // Icon size
       // margin: '0 10px', // Add space between icons
      };
  return (
    <div className={css.sectionEight}>
        <div className={css.container}>
            <div className={css.textContent}>
                <div className={css.buttons}>
                    <button className={css.socialBtn}><a href="#"><FaYoutube style={iconStyle} /></a></button>
                    <button className={css.socialBtn}><a href="#"><FaInstagram style={iconStyle} /></a></button>
                    <button className={css.socialBtn}><a href="#"><FaFacebook style={iconStyle}/></a></button>
                    <button className={css.socialBtn}><a href="#"><FaTiktok style={iconStyle} /></a></button>
                    <button className={css.socialBtn}><a href="#"><FaSnapchatGhost style={iconStyle} /></a></button>
                </div>
                <div className={css.text}>
                    <h1>Phasellus accumsan imperdiet tempor.
                    Cras tincidunt, arcu </h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, velit? Neque </p>
                </div>
            </div>
            <div className={css.image}>
                <img id={css.afterImg} src={image} alt="image" />
            </div>
        </div>
      
    </div>
  )
}

export default After
