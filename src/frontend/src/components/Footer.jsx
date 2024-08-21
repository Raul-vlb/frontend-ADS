import { Link } from 'react-router-dom'

function Footer() {

  return (
    <footer className="main-footer">

        <div className="main-footer__content">
            <div className="main-footer__logo">
                Footer
            </div>

            <ul className="main-footer__menu">
                <li>
                    <Link to="/"> 
                        Início
                    </Link>
                </li>
            </ul>
        </div>
        
    </footer>
  )
}

export default Footer
