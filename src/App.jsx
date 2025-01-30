import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/Sidebar/Sidebar';
import Administracion from './views/Administracion/Administracion';
import Dashboard from './views/Dashboard/Dashboard';
import Reservaciones from './views/Reservaciones/Reservaciones';
import Login from './views/Login/Login';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Redirigir la raíz al login */}
        <Route path="/" element={<Navigate to="/login" />} />
        
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<><Navbar /><Sidebar /><Dashboard /></>} />
        <Route path="/reservaciones" element={<><Navbar /><Sidebar /><Reservaciones /></>} />
        <Route path="/administracion" element={<><Navbar /><Sidebar /><Administracion /></>} />

        {/* Ruta 404 */}
        <Route path="*" element={<h1>404 - Página no encontrada</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;