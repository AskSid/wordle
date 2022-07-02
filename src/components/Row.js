import { useState } from 'react'
import Square from './Square'

const Row = ({ word, correctWord, showColor }) => {
  const [accountedFor, setAccountedFor] = useState([false, false, false, false, false])

  function getColor(letterNum) {
      if (showColor) {
        if (correctWord[letterNum] === word[letterNum])  {
            return 'green'
        } else if (correctWord.includes(word[letterNum])) {
            return 'goldenrod'
        } else {
            return 'gray'
        }
    } else {
        return 'gray'
    }
}

  return (
    <div className='row'>
        <Square letter={word[0]} color={getColor(0)}/>
        <Square letter={word[1]} color={getColor(1)}/>
        <Square letter={word[2]} color={getColor(2)}/>
        <Square letter={word[3]} color={getColor(3)}/>
        <Square letter={word[4]} color={getColor(4)}/>
    </div>
  )
}

export default Row
