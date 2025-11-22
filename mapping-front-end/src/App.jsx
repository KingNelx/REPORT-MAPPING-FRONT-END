import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Container from "react-bootstrap/Container"
import DamageReportPage from './Pages/DamageReportPage';
import 'leaflet/dist/leaflet.css';

const App = () => {
  return (
    <Container>
      <Router>
        <Routes>
          <Route path="/" element={<DamageReportPage />} />
        </Routes>
      </Router>
    </Container>
  );
}

export default App;