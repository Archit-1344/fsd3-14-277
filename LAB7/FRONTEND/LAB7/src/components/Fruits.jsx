const products = [
  {title: "Cabbage" , id: 1, isfruit: false},
  {title: "Banana" , id: 2, isfruit: true},
  {title: "Apple" , id: 3, isfruit: true},
  {title: "Potato" , id: 4, isfruit: false},
  {title: "Grapes" , id: 5, isfruit: true},
  {title: "Tomato" , id: 6, isfruit: false},
  {title: "Mango" , id: 7, isfruit: true},
  {title: "Onion" , id: 8, isfruit: false},
]

const ListItem = products.map((item) => <li style={{color: item.isfruit ? 'green' : 'red'}} key={item.id}>{item.title}</li>) ;

console.log(ListItem);

const Fruits = () => {
  return <ul > {ListItem} </ul>
} ;

export default Fruits ;

