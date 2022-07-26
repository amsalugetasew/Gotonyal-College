import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Administration from "./Pages/Administration/Administration";
import Academics from "./Components/Accadamics/Accademics";
import TrainingNConsultancy from "./Components/TrainingNConsultancy/TrainingNConsultancy";
import LMS from "./Components/LMS/LMS";
import Galary from "./Components/Galary/Galary";
import Contact from "./Components/Contact/Contact";
import NewsEvents from "./Components/News&Events/News&Events";
import SiggnIp from "./Components/SignIn/index";
import SiggnUp from "./Components/SignUp/index";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={
              <Home />
            } />
          </Route>
          <Route path="/Home">
            <Route index element={
              <Home />
            } />
          </Route>
          <Route path="/Home/Administration">
            <Route index element={
              <Administration />
            } />
          </Route>
          <Route path="/Accadamics">
            <Route index element={
              <Academics />
            } />
          </Route>
          <Route path="/Home/TrainingAndConsultancy">
            <Route index element={
              <TrainingNConsultancy />
            } />
          </Route>
          <Route path="/Home/LMS">
            <Route index element={
              <LMS />
            } />
          </Route>
          <Route path="/Home/Galary">
            <Route index element={
              <Galary />
            } />
          </Route>
          <Route path="/Home/Contact">
            <Route index element={
              <Contact />
            } />
          </Route>
          <Route path="/Home/NewsAndEvents">
            <Route index element={
              <NewsEvents />
            } />
          </Route>
          <Route path="signip">
            <Route index element={
              <SiggnIp />
            } />
          </Route>
          <Route path="signup">
            <Route index element={
              <SiggnUp />
            } />
          </Route>
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
