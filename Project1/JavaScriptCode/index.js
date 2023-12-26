console.log("insideJScode");
// const lastactivityTime = new Date();
// let users = [{title : 'POST1'}]
// // console.log(users);

// function createPost(value){
//     return new Promise((res,rej)=>{
//        if(value) {
//         res(users.push(value))
//        }
//     })
// }

// function updateLastUserActivityTime(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve(new Date())
//         }, 1000);
//     })
// }

// function deletePost(){
//     return new Promise((res,rej)=>{
//         if(users.length>0){
//             let popped = users.pop();
//             res(popped.title);
//         };

//     })
// }
// //  Promise.all
// Promise.all([createPost,updateLastUserActivityTime]).then(()=>{
//     createPost({title:'POST2'})
//     .then(()=>{
//         console.log(users ,  "last Activity Time is "+lastactivityTime)
//     })
    
// });
// Promise.all([deletePost,updateLastUserActivityTime]).then(()=>{
//     deletePost()
//     // .then(()=>{
//         console.log(users,  "last Activity Time is "+lastactivityTime)
//     // })  
   
// });
// Promise.all([createPost,updateLastUserActivityTime]).then(()=>{
//     createPost({title:'POST3'})
//     .then(()=>{
//         console.log(users,  "last Activity Time is "+lastactivityTime)
//     })
    
// });

// Promise.all([deletePost,updateLastUserActivityTime]).then(()=>{
//     console.log(users,  "last Activity Time is "+lastactivityTime)
// });

// console.log(users);
// createPost({title:'POST2'}).then(()=>{
//     console.log(users)
// })
// deletePost().then(()=>{
//     console.log(users);
// })
 
// =-=-=-=-=-=-=-=Async await //

const lastactivityTime = new Date();
let users = [{title : 'POST1'}]
// console.log(users);

let createPost = async function (value){
    let updateLastUserActivityTime1 = await updateLastUserActivityTime();
     let x = `LastSeen Of The User is " + ${updateLastUserActivityTime1}`
     if(value)users.push(value);
     await deletePost()
    //  console.log(users);
    return x
}
let updateLastUserActivityTime = async function () {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(new Date())
        }, 1000);
    })
}

let deletePost =  async function(){
    return new Promise((res,rej)=>{
        if(users.length>0){
            users.pop();
            res(users);
        };

    })
}


createPost({title : "POST2"}).then((t)=>{
   console.log(users ,"+", t)
});

// let deletepost1 = await deletePost();




