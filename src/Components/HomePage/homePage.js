import "./homepage.css";
import React from 'react'
const HomePage = (props) => {
  console.log(props)
  const handleSubjectClick = (subject) => {
    props.sendData(subject);
  };
  return (
    <div className='subject-section'>
        <h3>Trending Subjects</h3>
        <input className='searchbox' type="search" placeholder='Search Subjects'/>
        <div className='subject-list'>
            <p onClick={() => handleSubjectClick("Javascript")}>Javascript</p>
            <p onClick={() => handleSubjectClick("React Js")}>React Js</p>
            <p onClick={() => handleSubjectClick("Node Js")}>Node Js</p>
            <p onClick={() => handleSubjectClick("BlockChain")}>BlockChain</p>
            <p onClick={() => handleSubjectClick("Angular Js")}>Angular Js</p>
        </div>
    </div>
  )
}
export default HomePage