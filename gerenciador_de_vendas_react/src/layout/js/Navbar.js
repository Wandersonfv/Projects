import styles from '../css/Navbar.module.css';
import{Link} from "react-router-dom";




export default function NavBar() {
    return(
        <div className={styles.back}>
            <nav>
                <Link className={styles.link} to='/'>Cadastrar produtos</Link>
                <Link className={styles.link}>Cadastrar produtos</Link>
                <Link className={styles.link}>Cadastrar produtos</Link>
                <Link className={styles.link}>Cadastrar produtos</Link>
                <Link className={styles.link}>Cadastrar produtos</Link>



            </nav>
        </div>

    )
    
}