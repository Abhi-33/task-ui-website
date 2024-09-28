import React from 'react'
import css from './header.module.css';
const Header = () => {
  return (
    <header>
        <div className={css.container}>
            <h1 className={css.navHeading}>BookMyCollab</h1>
            <nav>
                <ul className={css.listContainer}>
                    <li><a href="/">What We Do</a></li>
                    <li><a href="/">How It Works</a></li>
                    <li><a href="/">Join Us As Brand</a></li>
                    <li><a href="/">Join Us As Creator</a></li>
                </ul>
                <button className={css.navBtn}>Login</button>
            </nav>
        </div>
    </header>
  )
}

export default Header
