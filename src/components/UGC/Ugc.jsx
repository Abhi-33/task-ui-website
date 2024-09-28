import React from 'react'
import css from './ugc.module.css';
import sharan from './sharanHegde.png';
import dolly from './dollySingh.jpg';
import kritika from './kritikaKhurana.jpg';
import bhuvan from './bhuvanBam.png';
import { BsCheckCircleFill } from 'react-icons/bs';
import { FaInstagram, FaYoutube, FaFacebook } from 'react-icons/fa';
const Ugc = () => {
  return (
    <div className={css.sectionTen}>

        {/* above cards content */}
        <div className={css.content}>
      <div className={css.heading}>
        <h1>UGC</h1> <br />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing </p>
      </div>
      <div className={css.viewAll}>
        <button>View All</button>
      </div>
      </div>

      {/* cards content */}
        <div className={css.cards}>
            <div className={css.cardsContainer}>
                {/* CARD-1 */}
                <div className={css.influencerCard}>
                    <div className={css.cardContainer}>
                        {/* image */}
                        <div className={css.cardImage}>
                        <img id={css.image} src={sharan} alt="sharanHegde" />
                        </div>
                        <div className={css.details}>
                            <div className={css.name}>
                            <h5>Sharan Hegde<BsCheckCircleFill style={{ color: '#28a745', fontSize: '12px' }} /></h5>
                            <p>financewithsharan</p>
                            </div>
                            <div className={css.followers}>
                               <h5> 2.6M </h5>
                                <p>Followers</p>
                            </div>
                        </div>
                        <hr className={css.cardLine} />
                         <div className={css.cardLinks}>
                            <div className={css.socialLinks}>
                                <button className={css.socialBtn}><a href="#"><FaInstagram  style={{ color: '#4F4F4F' , paddingTop: '2px'}}/></a></button>
                                <button className={css.socialBtn}><a href="#"><FaYoutube  style={{ color: '#4F4F4F', paddingTop: '2px' }}/></a></button>
                                <button className={css.socialBtn}><a href="#"><FaFacebook  style={{ color: '#4F4F4F', paddingTop: '2px' }}/></a></button>
                            </div>
                            <div className={css.cardBtn}>
                            <button className={css.compareBtn}>Compare</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Card-2 */}
                <div className={css.influencerCard}>
                    <div className={css.cardContainer}>
                        {/* image */}
                        <div className={css.cardImage}>
                        <img id={css.image} src={dolly} alt="dollyPic" />
                        </div>
                        <div className={css.details}>
                            <div className={css.name}>
                            <h5>Dolly Singh<BsCheckCircleFill style={{ color: '#28a745', fontSize: '12px' }} /></h5>
                            <p>dollysingh</p>
                            </div>
                            <div className={css.followers}>
                               <h5> 1.6M </h5>
                                <p>Followers</p>
                            </div>
                        </div>
                        <hr className={css.cardLine} />
                        <div className={css.cardLinks}>
                            <div className={css.socialLinks}>
                                <button className={css.socialBtn}><a href="#"><FaInstagram  style={{ color: '#4F4F4F' , paddingTop: '2px'}}/></a></button>
                                <button className={css.socialBtn}><a href="#"><FaYoutube  style={{ color: '#4F4F4F', paddingTop: '2px' }}/></a></button>
                                <button className={css.socialBtn}><a href="#"><FaFacebook  style={{ color: '#4F4F4F', paddingTop: '2px' }}/></a></button>
                            </div>
                            <div className={css.cardBtn}>
                            <button className={css.compareBtn}>Compare</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* card 3 */}
                <div className={css.influencerCard}>
                    <div className={css.cardContainer}>
                        {/* image */}
                        <div className={css.cardImage}>
                        <img id={css.image} src={kritika} alt="kritikaPic" />
                        </div>
                        <div className={css.details}>
                            <div className={css.name}>
                            <h5>Kritika Khurana<BsCheckCircleFill style={{ color: '#28a745', fontSize: '12px' }} /></h5>
                            <p>thatbohogirl</p>
                            </div>
                            <div className={css.followers}>
                               <h5> 1.8M </h5>
                                <p>Followers</p>
                            </div>
                        </div>
                        <hr className={css.cardLine} />
                        <div className={css.cardLinks}>
                            <div className={css.socialLinks}>
                                <button className={css.socialBtn}><a href="#"><FaInstagram  style={{ color: '#4F4F4F' , paddingTop: '2px'}}/></a></button>
                                <button className={css.socialBtn}><a href="#"><FaYoutube  style={{ color: '#4F4F4F', paddingTop: '2px' }}/></a></button>
                                <button className={css.socialBtn}><a href="#"><FaFacebook  style={{ color: '#4F4F4F', paddingTop: '2px' }}/></a></button>
                            </div>
                            <div className={css.cardBtn}>
                            <button className={css.compareBtn}>Compare</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* card 4 */}
                <div className={css.influencerCard}>
                    <div className={css.cardContainer}>
                        {/* image */}
                        <div className={css.cardImage}>
                        <img id={css.image} src={bhuvan} alt="sharanBhatPic" />
                        </div>
                        <div className={css.details}>
                            <div className={css.name}>
                            <h5>Bhuvan Bam<BsCheckCircleFill style={{ color: '#28a745', fontSize: '12px' }} /></h5>
                            <p>bhuvan.bam22</p>
                            </div>
                            <div className={css.followers}>
                               <h5> 19.1M </h5>
                                <p>Followers</p>
                            </div>
                        </div>
                        <hr className={css.cardLine} />
                        <div className={css.cardLinks}>
                            <div className={css.socialLinks}>
                                <button className={css.socialBtn}><a href="#"><FaInstagram  style={{ color: '#4F4F4F' , paddingTop: '2px'}}/></a></button>
                                <button className={css.socialBtn}><a href="#"><FaYoutube  style={{ color: '#4F4F4F', paddingTop: '2px' }}/></a></button>
                                <button className={css.socialBtn}><a href="#"><FaFacebook  style={{ color: '#4F4F4F', paddingTop: '2px' }}/></a></button>
                            </div>
                            <div className={css.cardBtn}>
                            <button className={css.compareBtn}>Compare</button>
                            </div>
                        </div>
                    </div>
                </div>
               
            </div>
        </div>
    </div>
  )
}

export default Ugc

