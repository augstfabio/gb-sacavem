import styles from './About.module.css'
import jp from '../assets/sobre.jpg'
import Carousel from '../components/Carousel'
import kids1 from '../assets/kids1.jpg'
import kids2 from '../assets/kids2.jpg'
import kids3 from '../assets/kids3.jpg'
import eco1 from '../assets/eco1.jpg'
import eco2 from '../assets/eco2.jpg'
import eco3 from '../assets/eco3.jpg'

import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useLayoutEffect } from 'react'
import { useRef } from 'react'
function About() {
    const sobreNos = useRef()
    const sobre = useRef()
    const kids = useRef()
    const treinoKids = useRef()
    const ecot = useRef()
    const ecoTreino = useRef()
    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        gsap.to(kids.current, {
            y: 0,
            opacity: 1,
            duration: 2,
            scrollTrigger: {
                trigger: treinoKids.current,
                start: 'top 600px',
                end: 'bottom 700px',
                scrub: true,
            }
        })
        return () => {
            gsap.killTweensOf(kids.current)
        }
    }, [])


    useLayoutEffect(() => {
        gsap.to(sobre.current, {
            y: 0,
            opacity: 1,
            duration: 2,

        })
        return () => {
            gsap.killTweensOf(sobre.current)
        }
    }, [])
    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        gsap.to(ecot.current, {
            y: 0,
            opacity: 1,
            duration: 2,
            scrollTrigger: {
                trigger: ecoTreino.current,
                start: 'top 600px',
                end: 'bottom 700px',
                scrub: true,

            }
        })
        return () => {
            gsap.killTweensOf(ecot.current)
        }
    }, [])

    return (
        <div className={styles.about} >
            <div className={styles.title}><h1>Sobre nós</h1></div>
            <section ref={sobreNos} className={styles.sobre_nos}>
                <div ref={sobre} className={styles.sobre}>
                    <div className={styles.texto}>
                        <h2>Gracie Barra Sacavém Coheb</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Praesentium eos nihil, aliquam optio consequatur harum
                            voluptatem iusto animi, inventore sit voluptatum accusamus
                            7 laboriosam expedita, omnis repellendus ducimus? Corporis,
                            voluptatum qui!</p>
                    </div>
                    <img src={jp} alt="" />
                </div>

            </section>
            <section ref={treinoKids} className={styles.treino_kids}>
                <div ref={kids} className={styles.kids}>
                    <div className={styles.carousel}>
                        <Carousel img1={kids1} img2={kids3} img3={kids2} />
                    </div>
                    <div className={styles.texto}>
                        <h2>Treino Kids</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Praesentium eos nihil, aliquam optio consequatur harum
                            voluptatem iusto animi, inventore sit voluptatum accusamus
                            7 laboriosam expedita, omnis repellendus ducimus? Corporis,
                            voluptatum qui!</p>
                    </div>
                </div>

            </section>
            <section ref={ecoTreino} className={styles.eco_treinos}>
                <div ref={ecot} className={styles.eco}>
                    <div className={styles.texto}>
                        <h2>Eco Treinos</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Praesentium eos nihil, aliquam optio consequatur harum
                            voluptatem iusto animi, inventore sit voluptatum accusamus
                            7 laboriosam expedita, omnis repellendus ducimus? Corporis,
                            voluptatum qui!</p>
                        
                    </div>
                    <div className={styles.carousel}>
                            <Carousel img1={eco1} img2={eco3} img3={eco2} />
                        </div>
                </div>
            </section>
        </div>
    )
}
export default About