import { useState, useEffect } from 'react'
import Row from './components/Row'
import Result from './components/Result'

function App() {
  //const [guesses, setGuesses] = useState([[],[],[],[],[],[]])
  const [guesses, setGuesses] = useState([{'row':[], 'current':true}, {'row':[], 'current':true}, {'row':[], 'current':true}, {'row':[], 'current':true}, {'row':[],'current':true}, {'row':[], 'current':true}])
  const [result, setResult] = useState('')
  
  let numGuesses = 0
  const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  const correctWord = ['t', 'a', 'c', 'i', 't']

  useEffect(() => {
    document.addEventListener('keydown', detectKeyDown, true)
  }, [])

  const detectKeyDown = (e) => {
    // user enters a word
    if ((guesses[numGuesses].row.length === 5) && (e.key === 'Enter') && (numGuesses < 6)) {
      console.log(guesses)
      numGuesses += 1
      checkIfCorrect()
      let temp3 = guesses
      temp3[numGuesses - 1].current = false
      setGuesses(temp3)
      console.log('Entered.')

    // user deletes a letter
    } else if ((e.key === 'Backspace') && (guesses[numGuesses].row.length > 0)) {
      let temp1 = guesses[numGuesses]
      temp1.row.pop(e.key)
      setGuesses([
        ...guesses.slice(0, numGuesses),
        temp1,
        ...guesses.slice(numGuesses + 1, 6)
      ])

    // user adds a letter
    } else if ((letters.includes(e.key)) && (guesses[numGuesses].row.length < 5)) {
      let temp2 = guesses[numGuesses]
      temp2.row.push(e.key)
      setGuesses([
        ...guesses.slice(0, numGuesses),
        temp2,
        ...guesses.slice(numGuesses + 1, 6)
      ])
    }
  }

  function checkIfCorrect() {
    if (arrayEquals(guesses[numGuesses - 1].row, correctWord)) {
      setResult('You got the word!')
    } else if (numGuesses === 6){
      setResult('L + Bozo + Didn\'t Get the Wordle')
    }
  }

  function arrayEquals(a, b) {
    return Array.isArray(a) &&
      Array.isArray(b) &&
      a.length === b.length &&
      a.every((val, index) => val === b[index]);
  }

  return (
    <div className="App">
      <h1>Wordle</h1>

      {guesses.map(guess => <Row word={guess.row} correctWord={correctWord} showColor={!guess.current} />)}

      <Result result={result} />
    </div>
  );
}

export default App;