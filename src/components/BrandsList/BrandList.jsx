import React from 'react'
import css from './brandlist.module.css';
import google from './brandAssets/google.jpg';
import grab from './brandAssets/grab.jpg';
import medium from './brandAssets/medium.jpg';
import microsoft from './brandAssets/microsoft.png';
import spotify from './brandAssets/spotify.png';
import stripe from './brandAssets/stripe.png';
import Uber from './brandAssets/Uber.png';
import youtube from './brandAssets/youtube.jpg';
import zoom from './brandAssets/zoom.png';
const BrandList = () => {
  return (
    <div className={css.sectionEleven}>
      <div className={css.container}>
        <div className={css.brandText}>
            <h2>Associated Brands</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
        </div>
        <div className={css.brandImages}>
            <div className={css.imagesContainer}>
            <div className={css.imagesFive}>
            <img id={css.spotify} src={spotify} alt="brand-image" />
            <img id={css.google} src={google} alt="brand-image" />
            <img id={css.stripe} src={stripe} alt="brand-image" />
            <img id={css.youtube} src={youtube} alt="brand-image" />
            <img id={css.microsoft} src={microsoft} alt="brand-image" />
            </div>
            <div className={css.imagesFour}>
            <img id={css.medium} src={medium} alt="brand-image" />
            <img id={css.zoom} src={zoom} alt="brand-image" />
            <img id={css.Uber} src={Uber} alt="brand-image" />
            <img id={css.grab} src={grab} alt="brand-image" />
            </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default BrandList
