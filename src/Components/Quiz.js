import React from 'react'
import "./Quiz.css"

const Quiz = () => {
  return (
    <div>
        <div className='border'>
        <div className='questioninfo'>
            <p>Q1 : Which of the following command is used to create react-js-app ?</p>
            <input type="radio" value="khjljkl"/>npx install create-react-app -g<br></br>
            <input type="radio" value="khjljkl"/>install - l create-react-app<br></br>
            <input type="radio" value="khjljkl"/>npm install create-react-app<br></br>
            <input type="radio" value="khjljkl"/>npx create-react-app appname<br></br>
            <div className='questionout'> 1 of 5</div>
        </div>
        </div>
        <hr/>
        <div className='border'>
        <div className='questioninfo'>
            <p>Q2 : What are the refs in React?</p>
            <input type="radio" value="khjljkl"/>Managing focus, text selection, or media playback<br></br>
            <input type="radio" value="khjljkl"/>Triggering imperative animations<br></br>
            <input type="radio" value="khjljkl"/>Integrating with third-party DOM libraries<br></br>
            <input type="radio" value="khjljkl"/>All of these<br></br>
            <div className='questionout'> 2 of 5</div>
        </div>
        </div>
        <hr/>
        <div className='border'>
        <div className='questioninfo'>
            <p>Q2 : What were the major problems with MVC framework?</p>
            <input type="radio" value="khjljkl"/>DOM manipulation was very expensive<br></br>
            <input type="radio" value="khjljkl"/>Applications were slow and inefficient<br></br>
            <input type="radio" value="khjljkl"/>Both A and B<br></br>
            <input type="radio" value="khjljkl"/>None<br></br>
            <div className='questionout'> 3 of 5</div>
        </div>
        </div>
        <hr/>
        <div className='border'>
        <div className='questioninfo'>
            <p>Q4 : What are the life cycles of ReactJS?</p>
            <input type="radio" value="khjljkl"/>Initialization<br></br>
            <input type="radio" value="khjljkl"/>State/Property Updates<br></br>
            <input type="radio" value="khjljkl"/>Destruction<br></br>
            <input type="radio" value="khjljkl"/>All of these<br></br>
            <div className='questionout'> 4 of 5</div>
        </div>
        </div>
        <hr/>
        <div className='border'>
        <div className='questioninfo'>
            <p>Q5 : What can we do with HOC?</p>
            <input type="radio" value="khjljkl"/>Render High jacking<br></br>
            <input type="radio" value="khjljkl"/>State abstraction and manipulation<br></br>
            <input type="radio" value="khjljkl"/>Props manipulation<br></br>
            <input type="radio" value="khjljkl"/>All of the above mentioned<br></br>
            <div className='questionout'> 5 of 5</div>
        </div>
        </div>
        <hr/>
        <div className='btninfo'>
            <button className='btn' type='submit'>Submit</button>
        </div>
    </div>
    
  )
}

export default Quiz