import AsyncStorage  from "@react-native-async-storage/async-storage";

export const STORAGE_KEY = "STORAGE_KEY";

export const SubmitDeck = async (entry,key)=>{
    const result = await AsyncStorage.mergeItem(STORAGE_KEY,JSON.stringify({[key]:entry}))
    return result
}

export const RemoveDeck =(key)=>{
    return AsyncStorage.getItem(STORAGE_KEY)
    .then((result)=>{
        const data= JSON.parse(result)
        data[key]=undefined,
        delete data[key]
        AsyncStorage.setItem(STORAGE_KEY, json.JSON.stringify(data))
    })
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