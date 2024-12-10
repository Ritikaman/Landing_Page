import {Routes,Route,Navigate} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Cars from "./pages/Cars.jsx";
import Team from "./pages/Team.jsx";
import Achievements from "./pages/Achievement.jsx";
import Sponsors from "./pages/Sponsors.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import Gallery from "./pages/Gallery.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import {Container} from "react-bootstrap";
import  Navbar from "./Components/Navbar.jsx";
import Footer from "./Components/Footer.jsx";
function App() {

  return (
    < div style={{backgroundColor:"#FFFAF0",color:"black"}}>
    <Navbar/>
    <Container>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Cars" element={<Cars/>}/>
      <Route path="/Team" element={<Team/>}/>
      <Route path="/Achievements" element={<Achievements/>}/>
      <Route path="/Sponsors" element={<Sponsors/>}/>
      <Route path="/Gallery" element={<Gallery/>}/>
      <Route path="/ContactUs" element={<ContactUs/>}/>
      <Route path="*" element={<Navigate to="/"/>}/>
      </Routes>
    </Container>
    <Footer/> 
    </div>
  )
}

export default App
