import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import img3 from '../assets/home3.jpg';
import img2 from '../assets/home2.jpg';
import logo from '../assets/logo.svg'
import img1 from '../assets/home1.jpg';
import Button from '../components/Button';
import ReactPlayer from 'react-player'
import video from '../assets/video.mp4'

import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useEffect, useLayoutEffect } from 'react'
import { useRef } from 'react'
import { useState } from 'react';

function Home() {
    const [tamanhoTela, setTamanhoTela] = useState(window.innerWidth)
    const about = useRef();
    const homePage = useRef();
    const handleResize = ()=>{
        setTamanhoTela(window.innerWidth);
    }
    useEffect(()=>{
        window.addEventListener('resize', handleResize);
        return ()=>{
            window.removeEventListener('resize', handleResize)
        }
    },[])
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
            <div className={styles.images}>
                <div className={styles.imgContainer}><img src={img2} alt="" /></div>
                <div className={styles.imgContainer}><img src={img1} alt="" /></div>
                <div className={styles.imgContainer}><img src={img3} alt="" /></div>
            </div>
            <div ref={about} className={styles.about}>
                <div className={styles.text}>
                    <h2>QUEM SOMOS?</h2>
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
            <div className={styles.competition}>{
                tamanhoTela < 600 ? (
                   <div className="container"></div>
                ):( <ReactPlayer
                    url={video}
                    playing={true}
                    loop={true}
                    muted={true}
                    width="100%"
                    height="117vh"
                    style={{ position: 'absolute', top: 0, left: 0, opacity: 1}} />)
            }
                
                <div className={styles.boxes}>
                    <div className={styles.turmas}>
                        <h1>turmas</h1>
                    </div>
                    <div className={styles.turmasSection}>
                        <article>
                            <h1>Turma Kids</h1>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, commodi veniam laborum illum adipisci dolores totam non dolorum quisquam numquam architecto, voluptatum ea possimus labore laudantium eligendi accusantium rerum voluptatibus?</p>
                        </article>
                        <article>
                            <h1>Turma Teens</h1>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, commodi veniam laborum illum adipisci dolores totam non dolorum quisquam numquam architecto, voluptatum ea possimus labore laudantium eligendi accusantium rerum voluptatibus?</p>
                        </article>
                        <article>
                            <h1>Turma Adultos</h1>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, commodi veniam laborum illum adipisci dolores totam non dolorum quisquam numquam architecto, voluptatum ea possimus labore laudantium eligendi accusantium rerum voluptatibus?</p>
                        </article>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Home;
