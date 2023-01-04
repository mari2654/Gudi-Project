import LogoGudi from "../../assets/logo-gudi.png"
import "./style.scss"

const Header = () => {
    return(
        <header>
            <div className='div-header'>
            <figure>
                <img src={LogoGudi} alt="Logo Gudi" />
            </figure>
            <div className="header-list-button">
            <nav>
                <ul>
                    <li><a href="#">Sobre</a></li>
                    <li><a href="#">Benefícios</a></li>
                    <li><a href="#">Contato</a></li>
                </ul>
            </nav>
                <button><a href="#">AGENDAR</a></button>
            </div>
            </div>
        </header>
    )
}

export default Header