import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './index.css';
import SideNav from './components/SideNav';
import Header from './components/Header';
import Footer from './components/Footer';
import FaqPage from './pages/FaqPage';
import { AppProvider } from './contexts/AppContext';
import Landing from './pages/Landing';

function App() {

  return (
    <AppProvider>
      <Router>
        <Header />
        <SideNav />
        <Routes>
          <Route path='*' element={<Landing />} />
          <Route path='/faq' element={<FaqPage />} />
        </Routes>
        <Footer />
      </Router>
    </AppProvider>
  );
}

export default App;
