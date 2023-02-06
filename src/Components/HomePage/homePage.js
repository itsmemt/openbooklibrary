import "./homepage.css";
import React from 'react';
import { Link } from "react-router-dom";
import BookDetails from "../BookDetails/BookDetails";
const HomePage = () => {
  return (
    <div className='main-container'>
        <div className='subject-section'>
          <h3>Trending Subjects</h3>
          <div className='subject-list'>
            <Link to="/subjects"><button className="btn">Click Here to Search By Subject</button></Link>
          </div>
        </div>
        <div>
          <BookDetails />
        </div>
    </div>
  )
}
export default HomePage