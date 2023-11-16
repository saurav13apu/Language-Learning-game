import React from 'react'
import './QuizBoard.css'

const QuizBoard = ({data, clicked, setClicked, winner, setWinner}) => {

  const handleOnClick = (e) => {
    const answer = e.target.innerText
    setClicked(1);
    if(answer == data.correctOption){
      setWinner(true);
    }
  }

  return (
        <div className="board">
            <div className="ques">
              <p>{data.question}</p>
            </div>
            <div className="options">
                <div className="screen" style={clicked ? {display: 'flex'} : {display: 'none'}}> Your Answer is {winner ? 'Correct!' : `Wrong! The correct answer is ${data.correctOption}!!`} </div>
                <div onClick={handleOnClick} style={clicked ? {display: 'none'} : {display: 'flex'}} id='option1' className={`option`}>{data.option1}</div>
                <div onClick={handleOnClick} style={clicked ? {display: 'none'} : {display: 'flex'}} id='option2' className={`option`}>{data.option2}</div>
                <div onClick={handleOnClick} style={clicked ? {display: 'none'} : {display: 'flex'}} id='option3' className={`option`}>{data.option3}</div>
                <div onClick={handleOnClick} style={clicked ? {display: 'none'} : {display: 'flex'}} id='option4' className={`option`}>{data.option4}</div>
            </div>
        </div>
  )
}

export default QuizBoard