
import './App.css';
import questionsList from './data/questionsList'
import answersList  from './data/answersList';
import resultsList from './data/resultsList';

import { useState } from 'react';
import { Question } from './components/Question.js'
import { PersonType } from './components/PersonType.js'

function App() {

  const [submit, setSubmit] = useState(false);
  const [personType, setPersonType] = useState();
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const questions = questionsList
  let answers = answersList

  const handleSubmit = () => {
    let result = ""

    if(answers.ei.a > answers.ei.b) result += "E"
    else result += "I"

    if(answers.sn.a > answers.sn.b) result += "S"
    else result += "N"

    if(answers.tf.a > answers.tf.b) result += "T"
    else result += "F"

    if(answers.jp.a > answers.jp.b) result += "J"
    else result += "P"

    const personTypeName = resultsList.map(res => {
      if(res.result === result) return res.name
      return null
    });

    setPersonType(() => {
      if(personTypeName) return personTypeName
      else return "Jesteś nietypową osobą"
    })
  }

  const handleOnNext = (questionType, answerA, answerB) => {
    switch(questionType) {
      case "ei": 
        if(answerA.current.checked) answers.ei.a += 1
        if(answerB.current.checked) answers.ei.b += 1
        break;

      case "sn":
        if(answerA.current.checked) answers.sn.a += 1
        if(answerB.current.checked) answers.sn.b += 1
        break;

      case "tf":
        if(answerA.current.checked) answers.tf.a += 1
        if(answerB.current.checked) answers.tf.b += 1
        break;

      case "jp":
        if(answerA.current.checked) answers.jp.a += 1
        if(answerB.current.checked) answers.jp.b += 1
        break;

      default:
        break;
    }

    if(currentQuestion !== questions.length - 1) {
      setCurrentQuestion(() => {
        return currentQuestion + 1
      })
    } else {
      setSubmit(true);
      handleSubmit();
      return 0;
    }
  }

  return (
    <div className="app">
      <div className="header">
        <div>
          <b>JAKĄ MASZ OSOBOWOŚĆ?</b><br />Odpowiedz na kilka pytań i sprawdź.
        </div>
      </div>
      <div className="container">
        {submit ? <PersonType personType={personType} /> : <Question question={questions[currentQuestion]} questNumber={currentQuestion} onNext={handleOnNext} />}
      </div>
    </div>
  );
}

export default App;
