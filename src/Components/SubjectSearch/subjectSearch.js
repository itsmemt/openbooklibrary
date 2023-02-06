import React, { useState, useEffect } from "react";
import Loading from "../loading";
import "./SubjectSearch.css";

const SubjectSearch = () => {
    const [subject, setSubject] = useState("javascript");
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const handleEnter = (event) => {
      if (event.key === "Enter") {
        setSubject(event.target.value);
      }
    };
  
    useEffect(() => {
      const fetchData = async () => {
        setLoading(true);
        const response = await fetch(
          `https://openlibrary.org/subjects/${subject}.json?limit=10`
        );
        const data = await response.json();
        setSearchResults(data.works);
        setLoading(false);
      };
      if (subject) {
        fetchData();
      }
    }, [subject]);
  
    return (
      <div>
        <div className="main-container">
          <div className="subject-section">
            <h3>Trending Subjects</h3>
            <input
              className="searchbox"
              type="search"
              placeholder="search by subject"
              onChange={(event) => setSearchTerm(event.target.value)}
              onKeyPress={handleEnter}
            />
            <div className="subject-list">
              <p onClick={() => setSubject("computer")}>Computer Science</p>
              <p onClick={() => setSubject("javascript")}>Javascript</p>
              <p onClick={() => setSubject("science")}>Science</p>
              <p onClick={() => setSubject("history")}>History</p>
              <p onClick={() => setSubject("law")}>Criminal Law</p>
            </div>
          </div>
          <div className="booklist">
            <h3 className="heading">
              Top 10 Books of {subject.charAt(0).toUpperCase() + subject.slice(1)}
            </h3>
            {loading && <Loading />}
            {searchResults.length === 0 ? (
              <p>No results found</p>
            ) : (
              <table>
                <thead>
                  <tr>
                    <th>Title & Sub Title</th>
                    <th>Author</th>
                    <th>First Publish Year</th>
                  </tr>
                </thead>
                <tbody>
                  {searchResults.map(
                    (book) =>
                      book.title.toLowerCase().includes(searchTerm.toLowerCase()) && (
                        <tr key={book.key}>
                          <td>{book.title}</td>
                          <td>{book.authors[0].name}</td>
                          <td>{book.first_publish_year}</td>
                        </tr>
                      )
                  )}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    );
  
};

export default SubjectSearch;