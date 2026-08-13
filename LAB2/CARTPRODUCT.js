import readline from "readline/promises" ;
import {stdin , stdout} from "process" ;
import {readFile , writeFile} from "fs/promises" ;
//DATABASE USING FILE STARTS 
const FILE ="CART.json" ;

const getCart = async () => {
    const data = await readFile(FILE , "utf-8")
    return JSON.parse(data) ;
};

const saveCart = async (cart) => {
    await writeFile (FILE , JSON.stringify(cart , null , 2)) ;
};

const addTocart = async (product) =>{
    const cart = await getCart() ;
    const isFoundInCart = cart.find((item) => item.id === product.id) ;
    if(isFoundInCart){
        isFoundInCart.qty +=1 ;
    } else cart.push(product) ;
    await saveCart(cart) ;
    console.log(`${product.name} added/updated to 🛒`) ;
} ;

const displayCart = async () =>{
    const cart = await getCart() ;
    if(cart.length == 0 ){
        console.log("Cart is empty") ;
        return ;
    }
    console.table(cart) ;
    const total = cart.reduce((sum , item) => sum + (item.price * item.qty) , 0) ;
    console.log(`Total payble amount Rs. ${total}`) ;
} ;

const removeProduct = async (product) =>{
    const cart = await getCart() ;
    let x = cart.length ;
    //const isFoundInCart = cart.find((item) => item.id === product.id) ;
    const newProducts = cart.filter((item) => item.id !== product.id) ;
    let y  = newProducts.length ;
    if (x>y){
        console.log(`${product.id} removed from cart`) ;
        await saveCart(newProducts) ;
    } 
    else{
        console.log(`${product.id} not found in cart`) ;
    }};
    const updateQuantity = async (product) =>{
        const cart = await getCart() ;
        const isFoundInCart = cart.find((item) => item.id === product.id) ;
        if(isFoundInCart){
            isFoundInCart.qty = product.qty ;
            await saveCart(cart) ;
            console.log(`${product.id} quantity updated`) ;
        } else {
            console.log(`${product.id} not found in cart`) ;
        }
    } ;
const main = async () => {
    let choice ;
    const cin = readline.createInterface({input: stdin , output:stdout}) ;

    do{
    console.log("Welcome to Amazon Shopping 🛒")
    console.log("1------Show Cart") ;
    console.log("2------Add Product") ;
    console.log("3------Remove Product") ;
    console.log("4------Update Quanity") ;
    console.log("5------Checkout") ;
    choice = await cin.question("enter your choice") ;

    switch(Number(choice)) {
        case 1 :
             await displayCart() ;
            break ;
        case 2 :
            const item = await cin.question("enter id , name , price , qty") ;
            const [id , name , price , qty ] = item.split(',').map((p)=>p.trim()) ;
            await addTocart({
                id: Number (id) ,
                name ,
                price: Number(price) ,
                qty: Number(qty) ,
            }) ;
            break ;

        case 3 :
            const productID =  await cin.question("enter product id ") ;
            await removeProduct({
                id: Number(productID) ,
            }) ;
            break ;
        case 4:
            const productid =  await cin.question("enter product id ") ;
            const newQty = await cin.question("enter new quantity ") ;
            await updateQuantity({
                id: Number(productid) ,
                qty: Number(newQty) ,
            }) ;
            break ;
        case 5:
            console.log("checkout") ;
            break ;
        default:
            console.log(" INVALID CHOICE ! TRY AGAIN") ;
            break ;
    }
    } while(choice!=5) ;
    cin.close() ;
} ;
main() ;