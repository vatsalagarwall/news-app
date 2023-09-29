import Header from './Components/Header';
import Business from './Components/Business';
import India from './Components/India';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Politics from './Components/Politics';
import Science from './Components/Science';
import Sports from './Components/Sports';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Header/>}></Route>
          <Route exact path='/business' element={<Business/>}></Route>
          <Route exact path='/india' element={<India/>}></Route>
          <Route exact path='/politics' element={<Politics/>}></Route>
          <Route exact path='/science' element={<Science/>}></Route>
          <Route exact path='/sports' element={<Sports/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
