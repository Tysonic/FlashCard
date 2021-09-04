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
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data))
    return result
}

export const AddQuestion = ()=>{

}

export const RemoveQuestion=()=>{

}

export const AnswerQustion = ()=>{

}
export const RessetQuestion =()=>{

}

export const getInitialData = ()=>{
    
}