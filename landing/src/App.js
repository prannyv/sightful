import { Route, Routes } from "react-router-dom";
import Landing from "./pages/landing/Landing";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Demo from "./pages/demo/Demo";
function App() {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route index element={<Landing/>} />
        <Route path="/demo" element={<Demo/>} />
      </Routes>
      <Footer/>
  </>
  );
}

export default App;
