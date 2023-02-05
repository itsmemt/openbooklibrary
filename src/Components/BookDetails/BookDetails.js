import React, {useState} from "react";
import "./BookDetails.css";
import BookLists from "../BookLists/bookLists";
import Pagination from "../Pagination/pagination";
const BookDetails = () => {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [offset, setOffset] = useState(0);
  const url=`https://openlibrary.org/search.json?title=${searchText}&limit=100&offset=${offset}`
  const handleSearchText = (event) => {
    setSearchText(event.target.value);
  };
    const fetchData = async () => {
      setLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      setSearchResults(data.docs);
      setLoading(false);
    };
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      fetchData();
      setOffset(0)
    }
  };
  const handleClick=(e)=>{
    e.preventDefault();
    fetchData();
    setOffset(0)
  }
  return (
    <div className="container">
      <div className="search-box">
      <input
        type="search"
        placeholder="Search by title or author "
        value={searchText}
        onChange={handleSearchText}
        onKeyPress={handleKeyPress}
      />
      <img className="search-icon" src="https://tse1.mm.bing.net/th?id=OIP.ktxAu_6vg1RhQ3hkV-A83QHaHa&pid=Api&rs=1&c=1&qlt=95&w=121&h=121" alt="Search Icon" height="45" onClick={handleClick} />
      </div>
      {loading && <div className="loading">Loading...</div>}
    <BookLists bookData={searchResults} offset={offset}/>
    <Pagination totalNoOfData={searchResults.length} offset={offset} setOffset={setOffset}/>
    </div> 
  );
};
export default BookDetails;