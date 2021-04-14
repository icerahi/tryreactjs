export const initialstate={
    profile:null,
    reload:null,
}

export const reducer=(state,action)=>{
    switch (action.type) {
        case 'profile':
            
            return{...state,profile:action.value}
        
        case 'reload':
            return {...state,reload:action.value}
            
        default:
            return state
    }
}