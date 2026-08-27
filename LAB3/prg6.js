import {writeFile} from "fs/promises"; 

for(let i = 0; i < 10000; i++) {
    await writeFile(`big.txt`, `Hello World : ${i}\n`, {flag: "a"});
}