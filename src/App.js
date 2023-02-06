import './App.css';
import HomePage from './Components/HomePage/homePage';
import SubjectSearch from './Components/SubjectSearch/SubjectSearch';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./Components/footer";
import Navbar from "./Components/header";
function App() {
  return (
    <div className="App">
      <Navbar/>
        <Router>
          <Routes>
            <Route exact path="/" element={<HomePage /> }/>
            <Route path="subjects" element={<SubjectSearch />} />
          </Routes>
        </Router>
      <Footer/>
    </div>
  );
}
export default App;