import React ,{useState} from 'react'
import styles from './carousels.module.css';
const Carousels = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };
  return (
    <div className={styles.sectionNine}>
     <div className={styles.carouselContainer}>
      {/* Carousel Inner */}
      <div className={styles.carousel}>
        <div className={styles.slideWrapper}>
          {images.map((image, index) => (
            <div
              key={index}
              className={`${styles.slide} ${
                index === currentIndex ? styles.activeSlide : ''
              } ${Math.abs(index - currentIndex) === 1 ? styles.blurredSlide : ''}`}
              style={{
                transform: `translateX(${(index - currentIndex) * 100}%)`,
                opacity: index === currentIndex ? 1 : 0.5,
              }}
            >
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className={styles.image}
              />
            </div>
          ))}
        </div>
        {/* Navigation Arrows */}
        <button className={styles.prev} onClick={prevSlide}>
          &#10094;
        </button>
        <button className={styles.next} onClick={nextSlide}>
          &#10095;
        </button>
      </div>
      {/* Dots/Indicators */}
      <div className={styles.dots}>
        {images.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${
              index === currentIndex ? styles.activeDot : ''
            }`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
</div>
  )
}

export default Carousels
