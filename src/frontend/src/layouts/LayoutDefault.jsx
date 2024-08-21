import { Outlet } from 'react-router-dom'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'

function LayoutDefault() {
    return (
        <div className="app">
            <Header />

            <div className="app__content">
                <Outlet />
            </div>            

            <Footer />
        </div>
    )
}

export default LayoutDefault
