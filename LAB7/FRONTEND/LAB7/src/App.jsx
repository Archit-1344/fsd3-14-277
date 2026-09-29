const b1 = {
  picurl : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHsdo5fnB0yhnhydc-4vAKWgQmd1itUpZRc4LzMnM6GiUiGfNgmQrhCeA&s=10",
  title : "Let us React",
  price : 765.00,
  quantity : 5,
  rating : 4.5
} ;

function Book(){
  return (
    <div>
      <img src={b1.picurl} alt="Book" height="200" width="150" />
      <h1>{b1.title}</h1>
      <h2>Price : {b1.price}</h2>
      <h3>Quantity :{b1.quantity}</h3>
      <h4>Rating : {b1.rating}</h4>
    </div>
  ) ;
}

export default function App() {
  return (
    <>
    <h1>Hello React</h1> ;
    <Book />
    <Book />
    <Book />
    </>
  ) ;
}