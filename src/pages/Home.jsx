
import styles from './Home.module.css';
import nogi from '../assets/nogi.jpg';
import kami from '../assets/kami.jpg';
import logo from '../assets/logo.svg'
import imperador from '../assets/imperador.jpg';
import Button from '../components/Button';
function Home() {
    return (
        <div className={styles.home}>
            <div className={styles.images}>
                <div className={styles.imgContainer}><img src={nogi} alt="" /></div>
                <div className={styles.imgContainer}><img src={kami} alt="" /></div>
                <div className={styles.imgContainer}><img src={imperador} alt="" /></div>
            </div>
            <div className={styles.about}>

                <div className={styles.text}>
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
                    <div className={styles.btn}><Button text="Saiba mais"/></div>
                </div>
               <div className={styles.logo}><img src={logo} alt="logo Gracie Barra" /></div> 
            </div>
        </div>
    );
}

export default Home;
