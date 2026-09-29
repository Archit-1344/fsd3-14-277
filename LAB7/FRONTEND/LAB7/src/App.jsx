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
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHsdo5fnB0yhnhydc-4vAKWgQmd1itUpZRc4LzMnM6GiUiGfNgmQrhCeA&s=10" alt="Book" height="200" width="150" />
      <h1>Let us React</h1>
      <h2>Price : 765.00</h2>
      <h3>Quantity :5</h3>
      <h4>Rating : 4.5</h4>
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