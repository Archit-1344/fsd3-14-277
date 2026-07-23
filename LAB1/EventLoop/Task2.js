import { write } from "fs";
import fs from "fs/promises" ;

const writeData = async () => {
    try {
        console.log("about to write") ;
        await fs.writeFile("stud.txt", "Name: Archit Shrivastava") ;
        console.log("file written") ;
    } catch (error) {
        console.error("Error writing file:", error) ;
    }
}
const f1 = () => {
    console.log("f1 starts") ;
} ;
const f2 = () => {
    console.log("f2 starts") ;
} ;
const f3 = () => {
    console.log("f3 starts") ;
} ;
const main = () => {
    console.log("main starts") ;
    setTimeout(f1, 0) ;
    //setinterval(f2 , 1000) ;
    setImmediate(f2) ;
    process.nextTick(f3) ;
    writeData() ;
    console.log("main ends") ;
} ;
main() ;
