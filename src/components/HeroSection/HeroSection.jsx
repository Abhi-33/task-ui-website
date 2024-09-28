import React from "react";
import css from "./herosection.module.css";
import image from "./section1-img.png";
const HeroSection = () => {
  return (
    <div className={css.sectionOne}>
      {/* two columns  */}
      {/* COLUMN-1 */}
      <div className={css.content}>
        <div className={css.contentContainer}>
          {/* HANDICON */}
          <span id={css.handIcon}>👋🏻</span>

          {/* HEADING */}
          <div className={css.heading}>
            <h1>Simplifying Influencer Marketing for You!</h1>
          </div>

          {/* SUBHEADING */}
          <div className={css.subHeading}>
            Explore creators across YouTube, Instagram & Facebook to curate
            unique content for your brand
          </div>

          {/* DROPDOWNS */}
          <div className={css.dropdowns}>

            {/*First Dropdown */}
            <select name="socials" className={css.dropdown}>
              <option value="Instagram">Instagram</option>
              <option value="Snapchat">Snapchat</option>
              <option value="Facebook">Facebook</option>
              <option value="Youtube">Youtube</option>
            </select>

            {/*Second Dropdown */}
            <select name="category"  className={css.dropdown}>
            <option value="Instagram">Select Category</option>
              <option value="Snapchat">Snapchat</option>
              <option value="Facebook">Facebook</option>
              <option value="Youtube">Youtube</option>
            </select>

            {/* Search button */}
            <button className={css.search}>Search</button>
          </div>

          {/* Trusted By */}
          <div className={css.trustedBy}>
            <p>Trusted By : </p>
            <ul className={css.trustedBrands}>
                <li id={css.chanel}>CHANEL</li>
                <li id={css.louis}>LOUIS VUITTON</li>
                <li id={css.prada}>PRADA</li>
                <li id={css.calvin}>Calvin Klein</li>
                <li id={css.denim}>DENIM</li>
            </ul>
          </div>
        </div>
      </div>
      <img id={css.image} src={image} alt="image" />
    </div>
  );
};

export default HeroSection;
