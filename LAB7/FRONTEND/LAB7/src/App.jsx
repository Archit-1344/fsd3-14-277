import Book from "./components/Book";
import Pen from "./components/Pen";
import {books} from "./data/books";
import {pens} from "./data/pens" ;
import Fruits from "./components/Fruits";
import Event from "./components/Event" ;

const MyButton = () => {
  let count = 1  ;
  const handleSubmit = () => {
    console.log("Button clicked!", count);
    count++ ;
  } ;
  return (
    <button className="bg-black text-white  rounded-md m-4 px-4 py-2 " onClick={handleSubmit}>Submit</button>
  )
} ;

export default function App() {
  return (
    <>
     {/* <h1><u>Online Book Store</u></h1>
      <div className="container">
        <Book book={books[0]} />
        <Book book={books[1]} />
        <Book book={books[0]} />
        <Book book={books[1]} />
    </div>
    <h1><u>Online Pen Store</u></h1>
    <div className="container">
        <Pen pen={pens[0]} />
        <Pen pen={pens[1]} />
    </div>
    <h1><u>Online Fruits Store</u></h1>
    <div className="container">
        <Fruits />
    </div> 
    <Event   />*/}
    <MyButton/>
    </>
  );
}