import { useState} from 'react';
const SubjectSearch = () =>{
    // console.log(props.subject)
  const [loading, setLoading] = useState(false);
  const url=`https://openlibrary.org/subjects/javascript.json?limit=10`;
// import "./BookDetails.css";
// import BookLists from "../BookLists/bookLists";
// import Pagination from "../Pagination/pagination";
//   const [searchText, setSearchText] = useState("");
//   const [searchResults, setSearchResults] = useState([]);
//   const [offset, setOffset] = useState(0);
    const fetchData = async () => {
      setLoading(true);
      const response = await fetch(url);
      const data = await response.json();
    //   setSearchResults(data);
    console.log(data)
      setLoading(false);
    };
    const clickHandler=()=>{
    fetchData();
}
  return (
    <div className="container">
     <div>
        <h4 onClick={clickHandler}>Subject</h4>
     </div>
      {loading && <div className="loading">Loading...</div>}
    {/* <BookLists bookData={searchResults} offset={offset}/> */}
    {/* <Pagination totalNoOfData={searchResults.length} offset={offset} setOffset={setOffset}/> */}
    </div> 
  );
};
export default SubjectSearch;