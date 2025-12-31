import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Reports from './pages/Reports';
import Washings from './pages/Washings';
import Clients from './pages/Clients';
import Profile from './pages/Profile';
import Services from './pages/Services';
import Employees from './pages/Employees';
import Settings from './pages/Settings';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/relatorios" element={<Reports />} />
        <Route path="/lavagens" element={<Washings />} />
        <Route path="/clientes" element={<Clients />} />
        <Route path="/perfil" element={<Profile />} />
        <Route path="/servicos" element={<Services />} />
        <Route path="/funcionarios" element={<Employees />} />
        <Route path="/configuracoes" element={<Settings />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default App;