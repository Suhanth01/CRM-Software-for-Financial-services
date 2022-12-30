import './App.css';
import Login from './Components/js/Login';
import { BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Adminhome from './Components/js/Adminhome';
import Forgotpass from './Components/js/Forgotpass';


function App() {
  return (
    <div className="App">
    
      <Router>
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/adminhome/" element={<Adminhome/> }/>             
            <Route path="/forgotpassword" element={<Forgotpass/>}/>
        </Routes>
      </Router>
    
    </div>
  );
}

export default App;