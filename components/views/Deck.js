import React from 'react'
import { View, Text } from 'react-native'
import Styles from '../../utils/styles'
import { useSelector } from 'react-redux'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { RemoveDeck } from '../../utils/api'
import { DeleteDeck } from '../actions/deck'
import { useDispatch } from 'react-redux'

const Deck = ({ route, navigation }) => {
    const dispatch = useDispatch()
    const { deck } = route.params
    const state = useSelector(state => state)
    let cards = 0
    if(state[deck]!==undefined){cards = state[deck].questions.length}

    const removeDeck =()=>{
        RemoveDeck(deck)
        navigation.navigate("Home")
    }
    return (
        <View style={Styles.main}>
            <Text style={Styles.header}>{deck}</Text>
            <Text style={Styles.cards}>{cards === 1
                ? cards + " Card" : cards === 0
                    ? "No card" : cards + ' cards'}
            </Text>

            <View style = {Styles.deckOptions}>
                <TouchableOpacity onPress={()=>navigation.navigate("Add Deck")}>
                    <Text style = {Styles.button}>Add Deck</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress = {()=>navigation.navigate("StartQuiz")}>
                <Text style = {Styles.button}>Start Quiz</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={removeDeck}>
                <Text style={Styles.delete}>Delete Deck</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default Deck
