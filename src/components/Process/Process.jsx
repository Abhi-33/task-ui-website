import React from 'react'
import css from './process.module.css';
import process from './processDesign.png';
const Process = () => {
  return (
    <div className={css.sectionTwelve}>
      <div className={css.designContainer}>
        <img src={process} alt="image" />
      </div>
    </div>
  )
}

export default Process
