
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Admin from './Components/Admin';
import View from './Components/View';
import Add from './Components/Add';
import Edit from './Components/Edit';
import PageNotFound from './Components/PageNotFound';


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
          <Route path='/' element={<Admin/>}/>
          <Route path='/view/:id' element={<View/>}/>
          <Route path='/add' element={<Add/>}/>
          <Route path='/edit/:id' element={<Edit/>}/>
          <Route path='*' element={<PageNotFound/>}/>

      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
