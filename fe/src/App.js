import { BrowserRouter ,Route,Routes} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddEdit from './pages/AddEdit/AddEdit';
import Home from './pages/Home/Home';
import Header from "./components/Header/Header";
import "./App.scss";
import Footer from './components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="header">
          <Header />
        </div>
        <div className="appBody">
        <ToastContainer />
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/add" element={<AddEdit/>}/>
            <Route path="/update/:id" element={<AddEdit/>}/>
          </Routes>
        </div>
        <div>
          <Footer/>
        </div>
      </div>

    </BrowserRouter>
  );
}

export default App;
