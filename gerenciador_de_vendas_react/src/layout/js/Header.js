import styles from '../css/Header.module.css'
import { IoReorderThreeOutline } from "react-icons/io5";

export default function Header(){
    return(
        <header>
            <IoReorderThreeOutline className={styles.icon}/>
            <h1> Header</h1>


        </header>

    )
}