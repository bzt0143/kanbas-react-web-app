import Labs from './Labs';
import Kanbas from './Kanbas';
import { HashRouter, Route, Routes, Navigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
export default function App() {
  return (
    <HashRouter>
      <div>
        <Link to="/Labs">Labs</Link> | <Link to="/Kanbas">Kanbas</Link>
        <Routes>
          <Route path='/Labs/*' element={<Labs />} />
          <Route path='/Kanbas/*' element={<Kanbas />} />
        </Routes>
      </div>
    </HashRouter>
  );
}