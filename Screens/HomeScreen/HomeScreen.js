import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen({navigation}){
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={()=>navigation.navigate('DYK')} style={styles.buttons}><Text style={styles.buttonText}>Did you know ➜</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('FlashCard')} style={styles.buttons}><Text style={styles.buttonText}>Flash Cards ➜</Text></TouchableOpacity>
        </View>
    )
}

const styles= StyleSheet.create({
    container :{
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttons :{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        padding: 10,
        marginVertical: 5,
        borderRadius: 5
    },
    buttonText: {
        color: 'white',
        fontSize: 25
    }
})