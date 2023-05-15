import { Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './pages/main/main';
import Header from './components/header/header';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from './components/footer/Footer';
import ProductInfoContainer from './pages/products/productInfo/productInfoContainer';
import Products from './pages/products/products';
import MrtPageContainer from './pages/products/mrtPage/MrtPageContainer';
import UziPageContainer from './pages/products/uziPage/UziPageContainer';
import KtPageContainer from './pages/products/ktPage/KtPageContainer';
import AboutPage from './pages/about/AboutPage';
import ContactsPage from './pages/contacts/ContactsPage';
import ScanPageContainer from './pages/products/scanPage/ScanPageContainer';
import TrenajerPageContainer from './pages/products/trenajerPage/TrenajerPageContainer';
import Policy from './pages/policy/Policy';
import MainContainer from './pages/main/MainContainer';


function App() {
  return (
    <div className="App">
      <Header />
      <div className="App-wrapper">
      
        <Routes>

          <Route path='/' element={<MainContainer />} />
          <Route path='/products/product/:id' element={<ProductInfoContainer />} />
          <Route path='/products' element={<Products />} />
          <Route path='/products/mrt' element={<MrtPageContainer />} />
          <Route path='/products/uzi' element={<UziPageContainer />} />
          <Route path='/products/kt' element={<KtPageContainer />} />
          <Route path='/products/trenajers' element={<TrenajerPageContainer />} />
          <Route path='/products/scan' element={<ScanPageContainer />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/contacts' element={<ContactsPage />} />
          <Route path='/policy' element={<Policy />} />
        </Routes>

      </div>
      <Footer />
    </div>
  );
}

export default App;
