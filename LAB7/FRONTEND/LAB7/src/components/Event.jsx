const MyButton = () => {
    const handleClick = () => {
        alert("Button clicked!");
    }
    return (
        <button className="bg-black text-white  rounded p-3" onClick={handleClick}>Click me</button>
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
