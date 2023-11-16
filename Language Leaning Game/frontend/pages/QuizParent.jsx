import './QuizParent.css'
import QuizBoard from './QuizBoard'
import { useState } from 'react'

const data = [
    {
        question: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni id saepe repudiandae, magnam assumenda minus ea. Dignissimos ex dolorem earum at accusamus temporibus voluptates? Consequuntur eius optio molestias fuga dolorum.",
        option1: "lorem",
        option2: "lorem",
        option3: "dolor",
        option4: "lorem",
        correctOption: "dolor"
    },
    {
        question: "dklsmkldmskld Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni id saepe repudiandae, magnam assumenda minus ea. Dignissimos ex dolorem earum at accusamus temporibus voluptates? Consequuntur eius optio molestias fuga dolorum.",
        option1: "dolor",
        option2: "lorem",
        option3: "lorem",
        option4: "lorem",
        correctOption: "dolor"
    }
]

const QuizParent = () => {

  const [qno, setQno] = useState(0)
  const [clicked, setClicked] = useState(0)
  const [winner, setWinner] = useState(false)


  const handleSubmitClick = (e) => {
    setQno(qno+1)
    setClicked(0)
    setWinner(false)
  }
  return (
    <div className="parent">
        <QuizBoard data={data[qno]} clicked={clicked} setClicked={setClicked} winner={winner} setWinner={setWinner} />
        <div className="submit">
                <div onClick={handleSubmitClick} className="submit-button">Submit</div>
        </div>
    </div>
  )
}

export default QuizParent