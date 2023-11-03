import React, { useState } from 'react'
import './Quiz.css'
import questions from '../quizData'
import Result from './Result'

function Quiz() {
  const[currentQuestion,setCurrentQuestion] = useState(0)
  const[score,setScore] =useState(0)
  const[correct,setCorrect] =useState(0)
  const[showResult,setShowResult] = useState(false)
  const[click,setClick] = useState(false)

  const handleAnswer =(iscorrect)=>{
    if(iscorrect){
      setScore(score+1)
      setCorrect(correct+1)


    }
    setClick(true)
  }
  const handleNextQue =()=>{
    setClick(false)
    const nextQue = currentQuestion+1
    if(nextQue<questions.length){
      setCurrentQuestion(nextQue)
    }else{
      setShowResult(true)
    }
    
  }
const handlePlayagain =()=>{
  setCurrentQuestion(0)
  setScore(0)
  setCorrect(0)
  setShowResult(false)
}

  return (
    <>
    {
      showResult?(<Result score={score} correct={correct} handlePlayagain={handlePlayagain} />) : (
         <>
        <h3 style={{textShadow: '0 0 3px #2fc836, 0 0 5px #c0ec10'}}className='head'>question of  {currentQuestion} / {questions.length} </h3>
    
      
        
       
          <div className='quest'>
          
          <h1  class="animate__animated animate__lightSpeedInRight">{questions[currentQuestion].questionText}</h1>
          
              
          </div>
          <div className='butt' >
            {
              questions[currentQuestion].answerOption.map((ans,index)=>{
               return  <button className={`answer ${click & ans.iscorrect? "correct":"false"}`} disabled={click} key={index}  onClick={()=>handleAnswer(ans.iscorrect)}> {ans.answerText}</button>
              })
            }
              
          </div>
          <h1 style={{textShadow: '0 0 3px #2fc836, 0 0 5px #c0ec10'}}>Score:{score} </h1>
          <div className='reset'>
              <button disabled={!click} onClick={handleNextQue} className='butt2'> Next </button>
          </div>
       </>
       )
    }
   
    

    </>
  )
}

export default Quiz