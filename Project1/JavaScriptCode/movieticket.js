console.log("Inside movie ticket page ");

console.log('Person 1')

// let person4 = new Promise((res,rej)=>{
//     res("finally : lets go guys : we dont want  anything else ");
// })

// let popcorn =new Promise((res,rej)=>{
//     res("lets bring some popcorn");
// })

// let butter = new Promise((res,rej)=>{
//     res("please take butter too for this popcorn");
// })
//  let colddrink = new Promise((res,rej)=>{
//     res("please take colddrink as well than we will go");
// })

// Promise.all([popcorn,butter,person4,colddrink]).then((result)=>{
//   console.log(result[0]);
//   console.log(result[1]);
//   console.log(result[3]);
//   console.log(result[2])
  
// }) 

let popcorn =new Promise((res,rej)=>{
    res("lets bring some popcorn");
})

let butter = new Promise((res,rej)=>{
    res("please take butter too for this popcorn");
})
 let colddrink = new Promise((res,rej)=>{
    res("please take colddrink as well than we will go");
})

let person4 = async ()=>{
    let popcorn1 = await popcorn;
    console.log(popcorn1);
    let butter1 = await butter;
    console.log(butter1);
    let colddrink1 = await colddrink;
    console.log(colddrink1);

    return ("finally : lets go guys : we dont want  anything else ");
}

person4().then((m)=>{
    console.log(m)
})

console.log('Person 2')

console.log('Person 3')

console.log('Person 5');


