import React from "react"
import { View, Text, TextInput, TouchableOpacity,Alert } from "react-native"
import { useState } from "react"
import { useSelector,useDispatch } from "react-redux"
import { AddDeck } from "../actions/deck"
import { SubmitDeck,STORAGE_KEY } from "../../utils/api"
import AsyncStorage from "@react-native-async-storage/async-storage"
import Styles from "../../utils/styles"

const App =  () => {
    const dispatch = useDispatch()
    const [deck, setDeck] = useState("")

    const handleSubmit = (event)=>{
        const data = {[deck]:{
            title:deck,
            questions:[]
        }}
        dispatch(AddDeck(data))
        SubmitDeck(data)
    }
    return (
        
        <View  style={Styles.main}>
            <View style={{flex:1, justifyContent:"center"}}>
            <Text style={{fontSize:20,textAlign:"center"}}>
                Provide a title for the deck
            </Text>
            <TextInput style={{
                height:40,
             borderWidth:1,borderRadius:5,
             marginTop:50}}
             onChangeText = {text=>setDeck(text)}/>
            </View>
                <TouchableOpacity style={{borderRadius:5,
                    borderColor:"#63a8ea",alignSelf:"center",
                     borderWidth:3,width:150,
                     marginBottom:50}}
                     onPress={handleSubmit}>
                    <Text style={{fontSize:20, textAlign:"center", color:"#63a8ea"}}>
                    Create Deck
                    </Text>
                </TouchableOpacity>
        </View>
    )
}

export default App