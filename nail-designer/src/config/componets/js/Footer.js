import style from '../css/Footer.module.css';
import {FaFacebook, FaInstagram, FaTwitter} from 'react-icons/fa'

export default function Footer(){
    return(

        <>
            <footer>

                <a href='' className={style.options}><span>Facebook </span> <FaFacebook/></a>
                <a href='' className={style.options}><span>Instagran </span> <FaInstagram/></a>
                <a href='' className={style.options}><span>Facebook </span> <FaTwitter/></a>
                




            </footer>
        
        
        </>
    )
}