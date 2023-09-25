import { Route, Routes ,Navigate } from "react-router-dom"; 
import Header from "./components/Header";
import Home from "./pages/Home"; 
function App() { 
  return (
    <div className="App">
        <Header/>
        <main>
          <Routes>
            <Route path="/home" element={<Home/>}/>
            <Route path="/" element={<Navigate to={"/home"}/>}/>
          </Routes>
        </main>
    </div>
  );
}

export default App;
