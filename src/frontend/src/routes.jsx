import { Routes, Route } from 'react-router-dom';
import LayoutDefault from './layouts/LayoutDefault.jsx';
import Home from './pages/home/index.jsx';

function MainRoutes() {
    return (
        <Routes>
            <Route element={<LayoutDefault />}>
                <Route path="/" element={<Home />} />
            </Route>
            
            <Route element={<LayoutDefault />}>
                <Route path="*" element={<h1>Opss... Not Found</h1>} />
            </Route>
        </Routes>
    )
}

export default MainRoutes;