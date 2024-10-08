import Weather from './components/weather/Weather';
import Home from './components/home/Home';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';
import Calculator from './components/calculator/Calculator';
import Notes from './components/notes/Notes';
import CurrencyConverter from './components/CurrencyConverter/CurrencyConverter';
import News from './components/news/News';
import Navigation from './components/navigation/Navigation';

const AppContent = () => {
  const location = useLocation();

  return (
    <div className="app">
      {location.pathname !== '/' && (
        <header>
          <Navigation />
        </header>
      )}
      <Routes>
      <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/currency-converter" element={<CurrencyConverter />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </div>
  );
};

export const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};
