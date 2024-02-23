import styles from './Footer.module.css'
import { Link } from 'react-router-dom'
function Footer() {
    return (
        <footer>
            <div className={styles.links}>
                <Link>Termos</Link>
                <Link>Privacidade</Link>
                <Link>Contato</Link>
            </div>
        </footer>
    )
}
export default Footer