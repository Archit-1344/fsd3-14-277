import Book from "./components/Book";
const b1 = {
  picUrl: "https://m.media-amazon.com/images/I/81q77Q39nEL._AC_UF1000,1000_QL80_.jpg",
  bname: "Harry Potter and the philosopher's stone",
  price: 1199,
  quantity: 10,
  rating: 5.0,
};

const b2 = {
  picUrl: "https://m.media-amazon.com/images/I/818umIdoruL._AC_UF1000,1000_QL80_.jpg",
  bname: "Harry Potter and the chamber of secrets",
  price: 1349,
  quantity: 15,
  rating: 5.0,
};

export default function App() {
  return (
    <>
      <h1><u>Online Book Store</u></h1>
      <div className="container">
        <Book book={b1} />
        <Book book={b2} />
        <Book book={b1} />
        <Book book={b2} />
    </div>
    </>
  );
}