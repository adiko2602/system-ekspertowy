import './App.css';
import { useState } from 'react';

function App() {

  const [answers, setAnswers] = useState([]);
  const [submited, setSubmited] = useState(false);
  const [personType, setPersonType] = useState();

  const questions = [
    {
        questNumber: 1,
        quest: "Co robisz na imprezie?",
        answA: "Wchodzisz w kontakt z każdym, nawet nieznajomym",
        answB: "Ograniczasz kontakt tylko do znajomych",
        type: "ei"
    },
    {
        questNumber: 2,
        quest: "Zazwyczaj bardziej?",
        answA: "Racjonalizujesz aniżeli spekujujesz",
        answB: "Spekulujesz aniżeli racjonalizujesz",
        type: "sn"
    },
    {
        questNumber: 3,
        quest: "Co jest gorsze?",
        answA: "Bujać w obłokach",
        answB: "Tkwić w rutynie",
        type: "sn"
    },
    {
        questNumber: 4,
        quest: "Co robi na Tobie większe wrażenie?",
        answA: "Zasady",
        answB: "Emocje",
        type: "tf"
    },
    {
        questNumber: 5,
        quest: "Bardziej przywiązujesz się do?",
        answA: "Przekonujących",
        answB: "Poruszających",
        type: "tf"
    },
    {
        questNumber: 6,
        quest: "Wolisz pracować?",
        answA: "Terminowo",
        answB: "Jakkolwiek, kiedykolwiek",
        type: "jp"
    },
    {
        questNumber: 7,
        quest: "Raczej dokonujesz wyborów?",
        answA: "Racjonalnie",
        answB: "Impulsywnie",
        type: "jp"
    },
    {
        questNumber: 8,
        quest: "Na imprezach?",
        answA: "Zostajesz do późna, Twoja energia wzrasta",
        answB: "Wychodzisz wcześniej, Twoja energia spada",
        type: "ei"
    },
    {
        questNumber: 9,
        quest: "Kto Cię bardziej przyciąga?",
        answA: "Ludzie wrażliwi",
        answB: "Obdażeni wyobraźnią",
        type: "sn"
    },
    {
        questNumber: 10,
        quest: "Bardziej interesuje Cię?",
        answA: "To co aktualne",
        answB: "To co możliwe",
        type: "sn"
    },
    {
        questNumber: 11,
        quest: "Przy dokonywaniu osądu skupiasz się bardziej na?",
        answA: "Prawie niż na okolicznościach",
        answB: "Okolicznościach niż na prawie",
        type: "tf"
    },
    {
        questNumber: 12,
        quest: "Przy poznawaniu innych, postrzegasz ich bardziej?",
        answA: "Obiektywnie",
        answB: "Subiektywnie",
        type: "tf"
    },
    {
        questNumber: 13,
        quest: "Jesteś bardziej?",
        answA: "Punktualny",
        answB: "Niespieszący",
        type: "jp"
    },
    {
        questNumber: 14,
        quest: "Wkurza Cię kiedy masz więcej spraw?",
        answA: "Niezałatwionych",
        answB: "Załatwionych",
        type: "jp"
    },
    {
        questNumber: 15,
        quest: "W kręgach Twoich znajomych, przyjaciół?",
        answA: "Jesteś na bieżąco z wydarzeniami",
        answB: "Jesteś do tyłu z wiedzą na temat zdarzeń",
        type: "ei"
    },
    {
        questNumber: 16,
        quest: "Podczas wykonywania zwykłych czynności zazwyczaj?",
        answA: "Wykonujesz je jak większość",
        answB: "Robisz po swojemu",
        type: "sn"
    },
    {
        questNumber: 17,
        quest: "Pisarze powinni?",
        answA: "Wyrażać to co myślą i myśleć co wyrażają",
        answB: "Przedstawiać zdarzenia za pomocą analogii",
        type: "sn"
    },
    {
        questNumber: 18,
        quest: "Które slogany przemawiają do Ciebie bardziej?",
        answA: "Stałość myśli przewodniej",
        answB: "Harmonijne współżycie ludzkości",
        type: "tf"
    },
    {
        questNumber: 19,
        quest: "Wolisz raczej dokonywać osądów?",
        answA: "Za pomocą logiki",
        answB: "Za pomocą wartości",
        type: "tf"
    },
    {
        questNumber: 20,
        quest: "Chcesz aby sprawy przebiegały?",
        answA: "Uporządkowanie i pewnie",
        answB: "Nieuporządkowanie i niepewnie",
        type: "jp"
    },
    {
        questNumber: 21,
        quest: "Powiesz, że jesteś bardziej?",
        answA: "Poważnym i zdeterminowanym człowiekiem",
        answB: "Luźno podchodzącym",
        type: "jp"
    },
    {
        questNumber: 22,
        quest: "Fakty?",
        answA: "Mówią same za siebie",
        answB: "Obrazują zasady",
        type: "sn"
    },
    {
        questNumber: 23,
        quest: "Wizjonerzy są?",
        answA: "Źródłem szczęścia",
        answB: "Przyczyną fascynacji",
        type: "sn"
    },
    {
        questNumber: 24,
        quest: "Częściej bywasz?",
        answA: "Chłodnym umysłem",
        answB: "Ciepłym serduszkiem",
        type: "tf"
    },
    {
        questNumber: 25,
        quest: "Lepiej być?",
        answA: "Niesprawiedliwym",
        answB: "Bezlitosnym",
        type: "tf"
    },
    {
        questNumber: 26,
        quest: "Dopuszczam do siebie zdarzenia?",
        answA: "Starannie je selekcjonując i wybierając",
        answB: "Przypadkowe i improwizuję",
        type: "jp"
    },
    {
        questNumber: 27,
        quest: "Czujesz się lepiej?",
        answA: "Po dokonaniu zakupu",
        answB: "Ze świadomością ''Mogę kupić''",
        type: "jp"
    },
  ]

  const handleOnChange = (e, question) => {
    const contains = answers.findIndex((a) => a.questNumber === question.questNumber)
    
    let answ = null
    if(e.target.value === question.answA) {
      answ = "a"
    } else {
      answ = "b"
    }

    if(contains !== -1) {
      const newAnswers = answers.map(answer =>
        answer.questNumber === question.questNumber ? { ...answer, answ: answ } : answer
      )
      setAnswers(newAnswers)
    } else {
      setAnswers(current => [...current, {questNumber: question.questNumber, answ: answ, type: question.type}])
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let eiA;
    let eiB;
    let snA;
    let snB;
    let tfA;
    let tfB;
    let jpA;
    let jpB;

    answers.map((answer) => {
      switch(answer.type) {
        case "ei":
          if(answer.answ === "a") {
            eiA++;
          } else {
            eiB++;
          }
          break;
        case "sn":
          if(answer.answ === "a") {
            snA++;
          } else {
            snB++;
          }
          break;
        case "tf":
          if(answer.answ === "a") {
            tfA++;
          } else {
            tfB++;
          }
          break;
        case "jp":
          if(answer.answ === "a") {
            jpA++;
          } else {
            jpB++;
          }
          break;
        default: 
        break;
      }
    });

    let result = "";

    if(eiA > eiB) {
      result += "E";
    } else {
      result += "I";
    }

    if(snA > snB) {
      result += "S";
    } else {
      result += "N";
    }

    if(tfA > tfB) {
      result += "T";
    } else {
      result += "F";
    }

    if(jpA > jpB) {
      result += "J";
    } else {
      result += "P";
    }

    switch(result) {
      case "ENFJ":
        setPersonType("Dawca")
        break;
      case "ENTJ":
        setPersonType("Wykonawca")
        break;
      case "ENFP":
        setPersonType("Inspirator")
        break;
      case "ENTP":
        setPersonType("Wizjoner")
        break;
      case "ESFJ":
        setPersonType("Opiekun")
        break;
      case "ESFP":
        setPersonType("Dusza towarzystwa")
        break;
      case "ESTJ":
        setPersonType("Strażnik")
        break;
      case "ESTP":
        setPersonType("Działacz")
        break;
      case "INFJ":
        setPersonType("Obrońca")
        break;
      case "INFP":
        setPersonType("Idealista")
        break;
      case "INTJ":
        setPersonType("Naukowiec")
        break;
      case "INTP":
        setPersonType("Myśliciel")
        break;
      case "ISFJ":
        setPersonType("Wychowawca")
        break;
      case "ISFP":
        setPersonType("Artysta")
        break;
      case "ISTJ":
        setPersonType("Obowiązkowy realizator")
        break;
      case "ISTP":
        setPersonType("Mechanik")
        break;
      default:
        setPersonType("Jesteś nietypową osobą")
        break;
    }
    setSubmited(true);    
  }

  return (
  <div className="app">
    <div className="header">
      <div>
        <b>JAKĄ MASZ OSOBOWOŚĆ?</b><br />Odpowiedz na kilka pytań i sprawdź.
      </div>
    </div>
      <div className="container">
        {submited ? 
        <>
        <div className="question">
          <span>Twoja osobowość to </span>
          {personType}
        </div> 
        </>
        : 
        <>
        <div className="questions">
          <form onSubmit={(e) => handleSubmit(e)}>
            {questions.map(question => (
                <div className="question" key={question.questNumber}>
                  <span>{question.quest}</span>
                  <label>
                    <input type="radio" onChange={(e) => handleOnChange(e, question)} name={question.questNumber} value={question.answA} />
                    {question.answA}
                  </label>
                  <label>
                    <input type="radio"  onChange={(e) => handleOnChange(e, question)} name={question.questNumber} value={question.answB} />
                    {question.answB}
                  </label>
              </div>
            ))}
            <div className="button-holder">
              <button className="button" type="submit">Wyślij</button>
            </div>
            
          </form>
        </div>
        </>}
      </div>
    </div>
  );
}

export default App;
