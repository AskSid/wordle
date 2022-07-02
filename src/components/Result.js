import React from 'react'

const Result = ({ result }) => {
  return (
      <p className='result' style={{backgroundColor: (result === 'You got the word!') ? 'green' : ((result === 'L + Bozo + Didn\'t Get the Wordle') ? 'red' : 'black')}}> {result} </p>
  )
}

export default Result
