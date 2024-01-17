import { BrowserRouter,Route,Routes} from "react-router-dom";
import Login from "./component/login"
import Signup from "./component/signup"
import Home from "./component/home";
import Add from "./component/add";
import './App.css';
import './responsive_Style.css';
import Edit from "./component/edit";

function App() {
  return (
    <div className="App">

   <BrowserRouter>
    <Routes>
      <Route index element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="home" element={<Home />} />
      <Route path="add" element={<Add />} />
      <Route path="edit/:id" element={<Edit />} />
      <Route path="login" element={<Login />} />
    </Routes>
   </BrowserRouter>
   
    </div>
  );
}

export default App;
