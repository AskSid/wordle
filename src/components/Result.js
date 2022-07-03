import React from 'react'

const Result = ({ result }) => {
  return (
    <div>
      <div className='result' style={{backgroundColor: (result === 'You got the word!') ? 'green' : ((result.substring(0, 12) === 'The word was') ? 'red' : 'black')}}> {result}</div>
      { ((result === 'You got the word!') || (result.substring(0, 12) === 'The word was')) ? <button onClick={() => window.location.reload(false)}>Click to play again!</button> : null }
    </div>
  )
}

Result.defaultProps = {
  result: 'not done',
}

export default Result
