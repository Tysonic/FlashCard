import { ADD_DECK,GET_DECKS } from "../actions/deck";

export default Deck =(state={}, action)=>{
switch(action.type){
    case ADD_DECK:
        return {
            ...state,
            ...action.deck
        }
        case GET_DECKS:
            return action.decks
        default:
            return state
}
}