import AsyncStorage  from "@react-native-async-storage/async-storage";

export const STORAGE_KEY = "STORAGE_KEY";

export const SubmitDeck = async (entry)=>{
    const result = await AsyncStorage.mergeItem(STORAGE_KEY,JSON.stringify(entry))
    return result
}

export const RemoveDeck = async (key)=>{
    const result = await AsyncStorage.getItem(STORAGE_KEY)
        const data= await JSON.parse(result)
        data[key]=undefined,
        delete data[key]
        const returnVal= await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data))
    return returnVal
}

export const AddCardToDeckDB = async (deck,card)=>{
    const data =  await AsyncStorage.getItem(STORAGE_KEY)
    const decks = JSON.parse(data)
    decks[deck].questions = decks[deck].questions.concat(card)
    const result = await AsyncStorage.setItem(STORAGE_KEY,JSON.stringify(decks))
    return result
}

export const RemoveQuestion=()=>{

}

export const AnswerQustion = ()=>{

}
export const RessetQuestion =()=>{

}

export const getInitialData = ()=>{
    
}