import React from 'react'
import css from './subfooter.module.css';
const Subfooter = () => {
  return (
          <>
      <div className={css.subFooter}>
      <ul>
        <li>No Upfront Payment</li>
        <li>Verified Creators </li>
        <li>Inbuilt Messengers</li>
        <li>Secure and Timely Payment</li>
      </ul>
    </div>
    <div className={css.lastFooter}>
        <ul>
            <li id={css.rights}>©️ Copyright • All Rights Reserved </li>
            <li id={css.lastText}>BookMyCollab 2024</li>
        </ul>
    </div>
    </>
  )
}

export default Subfooter 
