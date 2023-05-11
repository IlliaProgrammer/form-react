import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";


function App() {
  return (
    <div className="h-scren bg-gray-800">
      <BrowserRouter>
      <Navbar/>  
      <AppRouter/>
      <Footer/>
    </BrowserRouter>
    </div>
    
  );
}

export default App;
