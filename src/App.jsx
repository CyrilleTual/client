import { Routes, Route } from 'react-router-dom';
import "./App.css";
import Home   from './Pages/Home/Index'; 
import Header from './Components/Header';
import AddCategory from './Pages/Admin/AddCategory';
import Category from './Pages/Admin/Category';
import AddTea from './Pages/Admin/AddTea';
import Teas from './Pages/Admin/Teas';
import Listing from './Pages/listing/Index';
import Product from './Pages/Product/Index';
import About from './Pages/About/index';


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin/addCategory" element={<AddCategory />} />
        <Route path="/admin/manageCategory" element={<Category />} />
        <Route path="/admin/addTea" element={<AddTea />} />
        <Route path="/admin/teas" element={<Teas />} />
        <Route path="/listing" element={<Listing />}/>
        <Route path="/product/:id" element={<Product/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </>
  );
}

export default App;
