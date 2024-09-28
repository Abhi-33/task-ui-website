import React from "react";
import css from "./brandcard.module.css"; // Assuming you create a CSS file for this component
import image1 from './image1.jpg';
import image3 from './image3.jpg';
const BrandCard = () => {
  return (
    <div className={css.sectionSeven}>
        <div className={css.container}>
    
        {/* card 1*/}
    <div className={css.card} id={css.card1}>
      <h4 className={css.cardSubtitle}>Join As a Brand</h4>
      <h2 className={css.cardTitle}>Interdum et malesuada fames ac</h2>
      <a href="#" className={css.cardLink}>Join as a Brand →</a>
      <img src={image1} alt="Brand" className={css.cardImage} />
    </div>

    {/* card 2 */}
    <div className={css.card} id={css.card2}>
      <h4 className={css.cardSubtitle}>Join As a Creator</h4>
      <h2 className={css.cardTitle}>Interdum et malesuada fames ac</h2>
      <a href="#" className={css.cardLink}>Join as a Creator →</a>
      <img src={image3} alt="Brand" className={css.cardImage2} />
    </div>
    </div>
    </div>
  );
};

export default BrandCard;
