// const double=(n)=>n*2;
// // console.log(process.argv);
// // console.log(process.argv[2])
// const [, ,n,m]=process.argv
// // console.log(double(n));
// let sum=+n + +m;
// console.log(sum);

/******************* */
// using os module
// const os= require("os");
// console.log("Free memory: "+ os.freemem()/(1024*1024*1024) +" GB");
// console.log("Total memory", os.totalmem()/(1024*1024*1024));
// console.log("our version of OS is:", os.version());
// console.log("Process", os.cpus());

/**************************** */
// using FS package
//  const fs= require("fs");
let dataToInsert=["welcome to guvi and enjoy the pressure of IT",
"data1","data2","data3","data4","data5","data6","data7","data8","data9"]

// dataToInsert.map((ele,index)=>{
//     fs.writeFile(`./DataCreated/text${index}.html`, ele,(err)=>{
//         console.log("file" +index +"Created");
//     })
// })


//task2 of fs
//need to excecute node file.js 5
//output must be 5 text-1.html, ...text-5.html

// const fs=require("fs");
// const [,,n]= process.argv;

// for(let i=0; i<n;i++){
//     fs.writeFile(`./DataCreated/text2-${i}.html`, dataToInsert[i],(err)=>{
// console.log(`Data file Created text2-${i}.html`);
//     } )
// }

//read a file
// const fs= require("fs");
// fs.readFile("./DataCreated/cool.txt","utf-8", (err,data)=>{
//     if(err){
//         console.error(err);
//     }
//     console.log(`the content of data is: ${data}`)
// })
// let quote="New day new dreams"
// fs.appendFile("./DataCreated/cool.txt",quote+"\n", (err)=>{
//     console.log("appended data")
// })

/*********************** */
// const fs= require("fs");
// fs.unlink("./DataCreated/text2-4.html",(err)=>{
//     console.log("file deleted");
// })


// Read directory and delete all the files inside it
// const fs=require("fs");
// fs.readdir("./DataCreated",(err,files)=>{
//     console.log("all files", files);
//     files.map((ele)=>{
//         fs.unlink(`./DataCreated/${ele}`,(err)=>{
//     console.log("file deleted: ",ele);
// })
//     })
// })

/******************** */
//synchronous

const fs=require("fs");
const [,,n]= process.argv;

for(let i=0; i<n;i++){
    fs.writeFileSync(`./DataCreated/text2-${i}.html`, dataToInsert[i]);
    console.log(`Data file Created text2-${i}.html`);
}

