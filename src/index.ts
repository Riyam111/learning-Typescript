function greet(name:string):string{
    return `hello ${name}`
}
const username:string="riya"
console.log(greet(username))

//union 
let apiresponse:'success'|'pending'|'rejected'='pending'
apiresponse='rejected'

//type narrowing
function msg(kind:string|number){
    if(typeof kind==="string"){
        return `msg ${kind} `
    }
    return `msg ${kind}`
}

//instanceof typenarrowing
class eat{
    breakfast(){
        return `i eat apple in breakfast`
    }
}
class drink{
    breakfast()
{
    return `i drunk water in breakfast`
}}

function health(kind:eat|drink){
    if(kind instanceof eat){
      return  kind.breakfast()
    }
   else{ kind.breakfast()}
}

console.log(health(new eat()))

type skincare={
    type:string
    syrum:string
}
function beauty(kind:any):kind is skincare{
        return (
            typeof kind ==="object" &&
            kind!=null &&
            typeof kind.type==="string" &&
            typeof kind.syrum==="string"
        )
}
/*You are building a notification system. A notification can be either:

a string message

a number error code

Write a function showNotification that handles both types safely:*/
function notifymsg(msg:string|Number){
    if(typeof msg==='string'){
        console.log( `messge: ${msg}`)
    }
    else{
        console.log( `message:${msg}`)
    }
}
notifymsg("welcom")
notifymsg(404)

let response:any="riya"
let numberlength:number=(response as  string).length
console.log(numberlength);

//try catch method in typescript
try {
    
} catch (error) {
   if(error instanceof Error){
    console.log(error.message);} 
   else{
    console.log("error",error); }
}


