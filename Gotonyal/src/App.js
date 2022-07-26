import './App.css';
import { BrowserRouter, 
  Routes, 
  Route
 } from "react-router-dom";
//  import Home from "./Pages/Home/Home";
function App() {
  return (
    <div className="App">
      hello
      {/* <BrowserRouter>
        <Routes>
      <Route path="/">
            <Route index element={
                <Home/>
            } />
          </Route>
          <Route path="/Home">
            <Route index element={
                <Home/>
            } />
          </Route>
          </Routes>
          </BrowserRouter> */}
    </div>
  );
}

export default App;
