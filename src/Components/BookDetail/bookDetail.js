import React from 'react';
import "./bookDetail.css";
import { useEffect, useState } from 'react';
function BookDetail() {
    const [bookData,setBookData]=useState("");
 useEffect(()=>{
  async function getResponse() {
    const response = await fetch("https://openlibrary.org/search.json?title=javascript&limit=10");
    const data = await response.json(); 
    setBookData(data);
  }
getResponse();
 },[]);
//  const { docs:[{title, first_publish_year, author_name}] } = bookData;
 console.log(bookData)
    return (
        <div>
            <table>
                <thead>
                <tr>
                    <th>Title and Subtitle</th>
                    <th>Author</th>
                    <th>Latest Publish Year</th>
                    <th>First Publish Year</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Alfreds Futterkiste</td>
                    <td>Maria Anders</td>
                    <td>Germany</td>
                    <td>2022</td>
                </tr>
               {/* {data.map((list,index)=>{
                return (
                    <tr key={index}>
                    <td>{data.docs.title}</td>
                    <td>{props.bAuthor}</td>
                    <td>{props.Lpy}</td>
                    <td>{props.Fpy}</td>
                </tr> 
                )
               })} */}
                </tbody>
            </table>
        </div>
    )
}

export default BookDetail;