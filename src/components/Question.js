
import { useRef, useState } from 'react'
import "../App.css"

export function Question(props) {

    const [selected, setSelected] = useState(false)

    const answerA = useRef()
    const answerB = useRef()
    const question = props.question

    return (
        <div>
            <div className="question" key={question.questionNumber}>
                <span>{question.questionNumber}. {question.question}</span>
                <label>
                    <input type="radio" onChange={() => setSelected(true)} ref={answerA} name={question.questionNumber} value={question.a} />
                    {question.a}
                </label>
                <label>
                    <input type="radio" onChange={() => setSelected(true)} ref={answerB} name={question.questionNumber} value={question.b} />
                    {question.b}
                </label>
            </div>
            <div className="questions">
                <div className="button-holder">
                    <button 
                        disabled={!selected}
                        className="button" 
                        onClick={(e) => {
                            e.preventDefault()
                            setSelected(false)
                            props.onNext(question.type, answerA, answerB)}
                        }>
                        Dalej
                    </button>
                </div>
            </div>
        </div>
    )
}