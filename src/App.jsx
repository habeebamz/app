import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Listings from './pages/Listings';
import SingleListing from './pages/SingleListing';
import About from './pages/About';
import Vendors from './pages/Vendors';
import Destinations from './pages/Destinations';
import SingleDestination from './pages/SingleDestination';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/listings" element={<Listings />} />
            <Route path="/listing/:id" element={<SingleListing />} />
            <Route path="/about" element={<About />} />
            <Route path="/vendors" element={<Vendors />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/destination/:id" element={<SingleDestination />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;