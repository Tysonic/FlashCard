import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { useSelector } from 'react-redux'
import Styles from '../../utils/styles'


const Home = () => {
    
    const state = useSelector(s => s)
    return (
        <ScrollView style={Styles.main}>
            {Object.keys(state).map(s => {
                const cards = state[s][s].questions.length
                return <TouchableOpacity key={s} style={Styles.decks}>
                <Text style={Styles.deckTexts}>{s}</Text>
                <Text style={Styles.deckTexts}>{cards===1 ? cards+ " Card" : cards + ' cards'} </Text>
                </TouchableOpacity>
            })}
        </ScrollView>
    )
}

export default Home
