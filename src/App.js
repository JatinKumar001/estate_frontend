import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Property from './pages/property/Property';
import VrPage from './pages/VrPage/VrPage';
import List from './pages/list/List';
import AboutUs from './pages/AboutUs/AboutUs';
import SignUpPage1 from './pages/SignUpPage1/SignUpPage1';
import SignUp from './components/SignUpPage/SignUp';
import ProfilePage from './components/ProfilePage/ProfilePage';
import Searchbar from './components/filterBox/Searchbar';
import Map from './components/MapIntegration/Map'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/explorevr/:id' element={<VrPage />} />
          <Route path='/property' element={<List />} />
          <Route path='/property/:id' element={<Property />} />
          <Route path='/profile' element={<ProfilePage />} />
          <Route path='/signup' element={<SignUpPage1 />} />
          <Route path='/searchbar/:key' element={<Searchbar />} />
          <Route path='/Map' element={<Map />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;