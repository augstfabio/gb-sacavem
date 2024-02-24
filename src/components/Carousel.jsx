import styles from './Carousel.module.css'
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import { useRef } from 'react';
function Carousel({ img1, img2, img3 }) {
    const carousel = useRef()
    
    const handleLeftClick = (e) => {
        e.preventDefault();
        carousel.current.scrollLeft -= carousel.current.offsetWidth;
    }
    const handleRightClick = (e) => {
        e.preventDefault();
        carousel.current.scrollLeft += carousel.current.offsetWidth;
    }
    return (
        <div className={styles.box}>
            <button onClick={handleLeftClick}><GrPrevious /></button>
            <div ref={carousel} className={styles.carousel}>
                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />
            </div>
            <button onClick={handleRightClick}><GrNext /></button>
        </div>
    )
}
export default Carousel