import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        margin: "auto",
        width: "100%",
        alignSelf: 'center'
    },
    decks: {
        backgroundColor: "#abc",
        marginTop: 10,
        height: 80,
        borderRadius: 2,
    },
    deckTexts: {
        fontSize:25,
        textAlign: "center"
    },
    
    cards: {
        fontSize:15,
        textAlign: "center"
    },
    main: {
        flex: 1,
        width: "80%",
        alignSelf: "center"
    },
    DeckHeader:
    {
        fontSize: 20,
        textAlign: "center"
    },
    VerticalAlignCenter: {
        flex: 1,
        justifyContent: "center"
    },
    header:{
        marginTop:20,
        fontSize:30,
        textAlign:"center"
    },
    deckOptions:{
        flex:1,
        justifyContent:"center",
        alignSelf:"center"
    },
    button:{
        borderColor:"#61dafd",
        borderWidth:2,
        width:150,
        marginTop:20,
        padding:10,
        textAlign:"center",
        borderRadius:5,
        color:"#3197fd"
    },
    delete:{
        color:"red",
        textAlign:"center",
        padding:10
    }
})

export default Styles