import React from 'react'
import css from './designcreator.module.css';
import design from './design.png';

const DesignCreator = () => {
  return (
    <div className={css.sectionFive}>
        {/* Container for grid */}

      <div className={css.container}>
        {/* Column 1 */}
        <div className={css.meet}>
            <div className={css.meetContent}>
                <h2>Meet</h2> 
                {/* <span></span> */}
                <h1>The Design Creator</h1>
                <h3><u>Read More</u> ↗</h3>
            </div>
        </div>

        {/* Second Column */}
        <div className={css.meetDesign}>
            <div className={css.meetImg}>
                <img src={design} alt="design" />
            </div>
        </div>

      </div>
    </div>
  )
}

export default DesignCreator
