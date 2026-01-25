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