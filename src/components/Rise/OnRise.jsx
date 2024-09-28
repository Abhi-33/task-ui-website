import React from 'react'
import css from './onrise.module.css';
import tanmay from './tanmayBhat.jpg';
import kusha from './kushaKapila.jpeg';
import rohan from './rohanJoshi.png';
import bhuvan from './bhuvanBam.png';
import { BsCheckCircleFill } from 'react-icons/bs';
import { FaInstagram, FaYoutube, FaFacebook } from 'react-icons/fa';

const OnRise = () => {
  return (
    <div className={css.sectionSix}>

        {/* above cards content */}
        <div className={css.content}>
      <div className={css.heading}>
        <h1>On The Rise</h1> <br />
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
                        <img id={css.image} src={tanmay} alt="tanmayBhatPic" />
                        </div>
                        <div className={css.details}>
                            <div className={css.name}>
                            <h5>Tanmay Bhatt <BsCheckCircleFill style={{ color: '#28a745', fontSize: '12px' }} /></h5>
                            <p>tanmaybhat</p>
                            </div>
                            <div className={css.followers}>
                               <h5> 1.9M </h5>
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
                        <img id={css.image} src={kusha} alt="tanmayBhatPic" />
                        </div>
                        <div className={css.details}>
                            <div className={css.name}>
                            <h5>Kusha Kapila<BsCheckCircleFill style={{ color: '#28a745', fontSize: '12px' }} /></h5>
                            <p>kushakapila</p>
                            </div>
                            <div className={css.followers}>
                               <h5> 3.7M </h5>
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
                        <img id={css.image} src={rohan} alt="tanmayBhatPic" />
                        </div>
                        <div className={css.details}>
                            <div className={css.name}>
                            <h5>Rohan Joshi<BsCheckCircleFill style={{ color: '#28a745', fontSize: '12px' }} /></h5>
                            <p>mojorojo</p>
                            </div>
                            <div className={css.followers}>
                               <h5> 597K </h5>
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
                        <img id={css.image} src={bhuvan} alt="tanmayBhatPic" />
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

export default OnRise
