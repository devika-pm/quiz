import React from 'react'
import './Quiz.css'

function Result(props) {
  return (
    <div className='score'>
        <h2 style={{textShadow: '0 0 3px #2fc836, 0 0 5px #c0ec10',fontSize:'70px'}}>completed</h2>
        <h4 style={{textShadow: '0 0 3px #2fc836, 0 0 5px #c0ec10',fontSize:'40px'}}>Total score : {props.score}/6 </h4>
        <button onClick={props.handlePlayagain} style={{fontSize:'40px',textShadow: '0 0 3px #2fc836, 0 0 5px #c0ec10',borderBlockColor:'green'}}>Play Again</button>

    </div>
  )
}

export default Result