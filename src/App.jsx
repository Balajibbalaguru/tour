import Navbar from './components/Navbar';
import Destination from './components/Destination';
import Landing from './components/Landing';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';



function App() {
  return (
    <div className="App">
       <Navbar />
       {/* <Landing />
       <Destination /> */}
       <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path='/Destination' element={<Destination/>}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/Signup" element={<Signup />}></Route>
      </Routes>

    </div>
  );
}

export default App;
