import React from "react";
import css from "./categories.module.css";
import image from './sanjeevKapoor.png';
const Categories = () => {
  return (
    <div className={css.sectionThree}>
      {/* above cards */}
      <div className={css.content}>
        <div className={css.heading}>
          <h1>Categories</h1> <br />
        </div>
        <div className={css.viewAll}>
          <button>View All</button>
        </div>
      </div>

      {/* Profile Cards */}
      <div className={css.profileCards}>
        {/* card1 */}
        <div className={css.cont}>
        <div className={css.card}>
          <h2>The Foodies</h2>
          <div className={css.icon}>➜</div>
        </div>
          <img src={image} alt="Profile Image" />
          </div>
        {/* card1 */}
        <div className={css.cont}>
        <div className={css.card} id={css.card2}>
          <h2>The Techies</h2>
          <div className={css.icon}>➜</div>
        </div>
          <img src={image} alt="Profile Image" />
          </div>
        {/* card1 */}
        <div className={css.cont}>
        <div className={css.card} id={css.card3}>
          <h2>The Foodies</h2>
          <div className={css.icon}>➜</div>
        </div>
          <img src={image} alt="Profile Image" />
          </div>
        {/* card1 */}
        <div className={css.cont}>
        <div className={css.card} id={css.card4}>
          <h2>The Foodies</h2>
          <div className={css.icon}>➜</div>
        </div>
          <img src={image} alt="Profile Image" />
          </div>
         
      </div>
    </div>
  );
};

export default Categories;
