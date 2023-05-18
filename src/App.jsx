import { Routes, Route } from 'react-router-dom';
import "./App.css";
import Home   from './Pages/Home/Index'; 
import Test   from './Pages/Test/Index';
import Header from './Components/Header';
import AddCategory from './Pages/Admin/AddCategory';
import Category from './Pages/Admin/Category';


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
        <Route path="/admin/addCategory" element={<AddCategory />} />
        <Route path="/admin/manageCategory" element={<Category />} />
      </Routes>
    </>
  );
}

export default App;
