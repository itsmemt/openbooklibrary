import './App.css';
import BookSearch from "./Components/BookDetails/BookDetails";
import HomePage from './Components/HomePage/homePage';
import SubjectSearch from './Components/SubjectSearch/subjectSearch';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from 'react';
function App(props) {
  const { subject, setSubject } = useState("");
  const handleChildData = (data) => {
    setSubject(data);
    console.log(data)
  };
  return (
    <div className="App">
      <header className='header'>
        <h1>Open Book Library</h1>
      </header>
      <div className='main-container'>
        <Router>
          <Routes>
            <Route exact path="/" element={<>
            <HomePage sendData={handleChildData}/> 
            <BookSearch /></>} />
            <Route exact path="/subjects" element={
              <>             
                  <HomePage sendData={handleChildData}/>
                  <SubjectSearch />
              </>} />
          </Routes>
        </Router>
      </div>
      <footer className='footer'>
        <p>Copyright@Fyle's Assignment made with dedication.</p>
      </footer>
    </div>

  );
}
export default App;