type chai={
name:string
price:number
ingridient:(string|number)[]
}
type chaiii={
sugar:number
}
const adrakchai:chai|chaiii={
name:"adrak chai",
price:14,
ingridient:[2,"ginger"],
sugar:14

}


//assigning in new way
type item={name:string ,quantity:number}
type address={
    name:string,
    block:number,
    pincode:number
}
type order={
    id:string,
    item:item[],
    addres:address
}

//use of partial (to amke all obejct optional)
type chaii={
name:string
price:number
ingridient:(string|number)[]
}
const teamake=(option:Partial<chaii>)=>{
    console.log(option);
    
}
teamake({name:"adrak"})
teamake({price:12})

//if you want everything requires then also use required<chaii>
//also there is option for choose by name like pick<chaii,"name"|"price"> it means pick only these two
//you can skip ingrident

//and one more function is omit like if want to not add any specific 
//omit<chaii,"name"> 
