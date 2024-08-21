import { Link } from 'react-router-dom'
import Button from './Button'

function Header() {

  return (
    <header className="main-header">

        <div className="main-header__content">
            <div className="main-header__logo">
                Header
            </div>

            <ul className="main-header__menu">
                <li>
                    <Link to="/"> 
                        <Button label="Início"/>
                    </Link>
                </li>
            </ul>
        </div>
        
    </header>
  )
}

export default Header
