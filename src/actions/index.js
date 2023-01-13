export const addingCard=(data)=>{
    return{
        type:"CARD_DATA",
        payload:data
    }
}
export const DeleteCard=(data)=>{
    return{
        type:"DELETE",
        payload:data
    }
}
export const history=(elem)=>{
    return{
        type:"HISTORY",
        payload:elem
    }
}