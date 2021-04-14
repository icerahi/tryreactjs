
export const initialState = {
    home:'nothing',
    todo:'nothing',
}

export const reducer =(state,action)=>{
    switch (action.type) {
        case 'add_home':
            return {...state,home:action.value}
    
        case 'add_todo':
            return {...state,todo:action.value} 
        default:
            return state
    }
}
