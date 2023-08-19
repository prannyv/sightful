import { Route, Routes } from "react-router-dom";
import Landing from "./pages/landing/Landing";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route index element={<Landing/>} />
        {/* <Route path="/signup" element={<LoginPage mode="signup" />} /> */}
      </Routes>
      <Footer/>
  </>
  );
}

export default App;
