export default function Book(props) {
  {/*console.log(props);*/}
  const{bname, price, quantity, rating, picUrl} = props.book;
  const qtyStyle = {
    fontSize: "1rem",
    color: "blue",
    textAlign: "center",
    backgroundColor: "yellow",
    padding: "10px",
  }
  return (
    <div className="book">
      {/*
      <img
        src="https://m.media-amazon.com/images/I/81SGz3GDoiL.jpg"
        alt="Design Patter React JS"
      />
      */}

    {/* <img src={props.book.picUrl} alt={props.book.bname} /> */}

      {/*
      <h1>Let Us React</h1>
      <h2>Price: 765.00</h2>
      <h3>Quantity: 5</h3>
      <h4>Rating: 5.0</h4>
      */}
    {/*}
      <h1>{props.book.bname}</h1>
      <h2>Price: {props.book.price}</h2>
      <h3>Quantity: {props.book.quantity}</h3>
      <h4>Rating: {props.book.rating}</h4>  */}

      <img src = {picUrl} alt = {bname} />
      <h1>{bname}</h1>
      <h2>Price: {price}</h2>
      <h3 style = {qtyStyle}>Quantity: {quantity}</h3>
      <h4 style={{ color: 'red', textAlign: 'center'}}>Rating: {rating}</h4>
      <button>Buy Now</button>
    </div>
  );
}