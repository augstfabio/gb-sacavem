import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import img3 from '../assets/home3.jpg';
import img2 from '../assets/home2.jpg';
import logo from '../assets/logo.svg'
import img1 from '../assets/home1.jpg';
import Button from '../components/Button';

import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useLayoutEffect } from 'react'
import { useRef } from 'react'

function Home() {
    const about = useRef();
    const homePage = useRef();
    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        gsap.to(about.current, {
            y: 0,
            opacity: 1,
            duration: 2,
            scrollTrigger: {
                trigger: homePage.current,
                start: 'top 600px',
                end: 'bottom 700px',
                scrub: true,
            }
            
        })
        return () => {
            gsap.killTweensOf(about.current)
        }
    }, [])


    return (
        <div ref={homePage} className={styles.home}>
            <div  className={styles.images}>
                <div className={styles.imgContainer}><img src={img2} alt=""/></div>
                <div className={styles.imgContainer}><img src={img1} alt="" /></div>
                <div className={styles.imgContainer}><img src={img3} alt="" /></div>
            </div>
            <div ref={about} className={styles.about}>
                <div  className={styles.text}>
                    <h2>Sobre Nós</h2>
                    <p>Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Inventore, beatae
                        mollitia. Maxime et culpa, aut, harum
                        placeat optio at dolorum aspernatur
                        sit tempora nostrum repellat voluptatem
                        alias illo sunt. Possimus. Lorem ipsum, dolor
                        sit amet consectetur
                        adipisicing elit. Dicta voluptas necessitatibus
                        nesciunt! Est, saepe dolores facilis quo blanditiis quisquam, odio nobis quidem nulla necessitatibus voluptate minima illum
                        ad sapiente repudiandae.</p>
                    <Link to='/about' className={styles.btn}><Button text="Saiba mais" /></Link>
                </div>
                <div className={styles.logo}><img src={logo} alt="logo Gracie Barra" /></div>
            </div>
        </div>
    );
}

export default Home;
