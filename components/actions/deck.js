export const ADD_DECK = "ADD_DECK"
export const GET_DECKS = "GET_DECKS"

export const AddDeck = (deck)=>{
return {
    
    type:ADD_DECK,
    deck
}
}

export const GetDecks = (decks)=>{
   return { type:GET_DECKS,
    decks
}
}