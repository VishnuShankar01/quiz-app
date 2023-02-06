import React from 'react'
import "./Header.css"

const Header = () => {
  return (
    <div className='header'>
        <h1 style={{margin:"auto"}}>Quiz</h1>
        <div className='info'>
            <div className='quesinfo'>Total Questions : 10</div>
            <div className='timeinfo'>Time Left : 25mins</div>
        </div>
    </div>
  )
}

export default Header