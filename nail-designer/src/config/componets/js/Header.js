import style from '../css/Header.module.css'
import {Link} from 'react-router-dom'
import Home from '../../pages/js/Home'
import AboutMe from '../../pages/js/AboutMe'
import Location from '../../pages/js/Location'
import Contacts from '../../pages/js/Contacts'

export default function Header(){

    


    return(
        <>
            <header className={style.cabeçalho}>
                    <div className={style.img}></div>



                    

                    <nav className={style.menu}>
                        
                            <Link className={style.options}  to="/" >Home</Link>
                            <Link className={style.options}  to="/sobremin" >Sobre min</Link>
                            <Link className={style.options}  to="/local" >Localização</Link>
                            <Link className={style.options}  to="/contatos" >Contato</Link>

                        
                        
                       

                    </nav>    
                     
                    

                     

            </header>
        
        </>

    )
}