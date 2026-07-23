
const f1 = () => {
    console.log("f1 starts") ;
    f2() ;
    console.log("f1 running") ;
    console.log("f1 End") ;
} ;
const f2 = () => {
    console.log("f2 starts") ;
    f3() ;
    console.log("f2 running") ;
    console.log("f2 End") ;
} ;
const f3 = () => {
    console.log("f3 starts") ;
    console.log("f3 running") ;
    console.log("f3 End") ;
} ;
function main() {
    console.log("main") ;
    f1() ;
    console.log("End Main") ;
}
main() ;
// in asynchronous we use event loop to manage the call stack 
//in synchronous we use event loop to manage the call stack and the callback queue.
//asynchronous using times 
// 1. set timeout
// 2. set immediate
// 3. Process.next tick
// 4. set Interval