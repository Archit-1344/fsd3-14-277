const MyButton = () => {
    const handleClick = () => {
        alert("Button clicked!");
    }
    return (
        <button style={{ height:"40px" , width:"100px"}} onClick={handleClick}>Click me</button>
    )
} ;

const Event = () => {
  return (
    <div>
      <MyButton />
    </div>
  )
}

export default Event
