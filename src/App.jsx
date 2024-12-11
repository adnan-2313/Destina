import "./App.css";
import LandingPage from "./pages/LandingPage";
import bg from "../public/bg.jpg";
function App() {
  return (
    <>
      <img src={bg} alt="" className="fixed opacity-60 -z-10" />
      <LandingPage />
    </>
  );
}

export default App;
