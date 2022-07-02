const Square = ({ letter, color }) => {
  return (
    <div className='square' style={{backgroundColor:color}}>
        <p className='letter'>{letter}</p>
    </div>
  )
}

Square.defaultProps = {
    color: 'black',
  }

export default Square
