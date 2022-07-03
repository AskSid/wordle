import { useState, useEffect } from 'react'
import Row from './components/Row'
import Result from './components/Result'
import { getWord } from './getWord'
import { words } from './words'



function App() {
  const [guesses, setGuesses] = useState([{'row':[], 'current':true}, {'row':[], 'current':true}, {'row':[], 'current':true}, {'row':[], 'current':true}, {'row':[],'current':true}, {'row':[], 'current':true}])
  const [result, setResult] = useState('')
  
  let numGuesses = 0
  const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  const [correctWord] = useState(getWord())

  useEffect(() => {
    document.addEventListener('keydown', detectKeyDown, true)
  }, [])
  
  const detectKeyDown = (e) => {
    // user enters a word
    if ((guesses[numGuesses].row.length === 5) && (e.key === 'Enter') && (numGuesses < 6)) {
      if (words().includes(guesses[numGuesses].row.join(''))) {
        enterWord(e.key)
      } else {
        // user enters an invalid word
        let temp4 = guesses
        temp4[numGuesses].row = []
        setGuesses(temp4)
      }

    // user deletes a letter
    } else if ((e.key === 'Backspace') && (guesses[numGuesses].row.length > 0)) {
      deleteKey(e.key)

    // user adds a letter
    } else if ((letters.includes(e.key)) && (guesses[numGuesses].row.length < 5)) {
      enterKey(e.key)
    }
  }

  function enterWord(key) {
    console.log(guesses)
    numGuesses += 1
    checkIfCorrect()
    let temp3 = guesses
    temp3[numGuesses - 1].current = false
    setGuesses(temp3)
    console.log('Entered.')
  }

  function deleteKey(key) {
    let temp1 = guesses[numGuesses]
    temp1.row.pop(key)
    setGuesses([
      ...guesses.slice(0, numGuesses),
      temp1,
      ...guesses.slice(numGuesses + 1, 6)
    ])
  }

  function enterKey(key) {
    let temp2 = guesses[numGuesses]
    temp2.row.push(key)
    setGuesses([
      ...guesses.slice(0, numGuesses),
      temp2,
      ...guesses.slice(numGuesses + 1, 6)
    ])
  }

  function checkIfCorrect() {
    console.log(guesses[numGuesses - 1].row)
    console.log(correctWord)
  
    if (arrayEquals(guesses[numGuesses - 1].row, correctWord.split(''))) {
      setResult('You got the word!')
    } else if (numGuesses === 6){
      setResult('the word was ' + correctWord + '!')
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